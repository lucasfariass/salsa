import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, forkJoin, map, switchMap, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IPokemon } from '../models/pokemon.interface';

@Injectable()
export class PokemonService {
	private url: string = environment.URL + '/pokemon';
	private _pokemons: IPokemon[] = [];
	private _next: string = '';
	private readonly FAVORITES_KEY = 'favorites';
	private refreshFavorites = new Subject();

	public $refreshFavorites = this.refreshFavorites.asObservable();

	constructor(private http: HttpClient) {}

	get pokemons(): IPokemon[] {
		return this._pokemons;
	}

	get next(): string {
		return this._next;
	}

	set next(next: string) {
		this._next = next;
	}

	public addFavorite(pokemon: IPokemon): void {
		const favorites = JSON.parse(localStorage.getItem(this.FAVORITES_KEY) || '[]') as IPokemon[];
		favorites.push(pokemon);
		localStorage.setItem(this.FAVORITES_KEY, JSON.stringify([...new Set(favorites)]));
		this.refreshFavorites.next(true);
	}

	public removeFavorite(pokemon: IPokemon): void {
		const favorites = JSON.parse(localStorage.getItem(this.FAVORITES_KEY) || '[]') as IPokemon[];
		localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites.filter((fav) => fav.id !== pokemon.id)));
		this.refreshFavorites.next(true);
	}

	public getFavorites(): IPokemon[] {
		return JSON.parse(localStorage.getItem(this.FAVORITES_KEY) || '[]') as IPokemon[];
	}

	public clear(): void {
		this._pokemons = [];
		this._next = '';
	}

	public get(idOrName: string): Observable<IPokemon> {
		const url = `${this.url}/${idOrName}`;
		return this.http.get(url).pipe(
			map((pokemon: any) => {
				return {
					id: pokemon.id,
					name: pokemon.name,
					imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
					experience: pokemon.base_experience,
					types: (pokemon.types as Array<any>).map((types) => types.type),
					height: pokemon.height / 10,
					weight: pokemon.weight / 10,
					abilities: pokemon.abilities.map((ability: any) => ability.ability),
					stats: pokemon.stats.map((stat: any) => ({
						name: stat.stat.name,
						value: stat.base_stat,
						url: stat.stat.url,
					})),
				};
			})
		);
	}

	public getNext(): Observable<any> {
		const url = this.next === '' ? `${this.url}?limit=20` : this.next;
		return this.http.get(url).pipe(
			tap((response: any) => {
				this.next = response.next;
				const details: Observable<IPokemon>[] = response.results.map((i: any) => this.get(i.name));
				forkJoin(details).subscribe({
					next: (response: IPokemon[]) => {
						this.pokemons.push(...this.checkFavorites(response));
					},
				});
			})
		);
	}

	public getEvolution(id: number): Observable<any> {
		const url = `${environment.URL}/evolution-chain/${id}`;
		return this.http.get(url);
	}

	public getSpecies(name: string): Observable<any> {
		const url = `${environment.URL}/pokemon-species/${name}`;
		return this.http.get<any>(url);
	}

	private checkFavorites(pokemons: IPokemon[]): IPokemon[] {
		const favorites = this.getFavorites();
		return pokemons.map((pokemon) => ({ ...pokemon, isFavorite: favorites.some((fav) => fav.id == pokemon.id) }));
	}
}
