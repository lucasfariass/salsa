import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, switchMap } from 'rxjs';
import { IPokemon } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
	selector: 'slt-poke-details-container',
	templateUrl: './poke-details-container.component.html',
	styleUrl: './poke-details-container.component.scss',
})
export class PokeDetailsContainer implements OnDestroy {
	public pokemon!: IPokemon;
	private id!: string;
	private subscription: Subscription;

	constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) {
		this.subscription = this.activatedRoute.params.subscribe((params) => {
			this.id = params['id'];
			this.getPokemonById();
		});
	}

	public ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	private getPokemonById(): void {
		const $getSpecies = (pokemon: any) => {
			return this.pokemonService
				.getSpecies(pokemon.name)
				.pipe(map((species) => ({ ...pokemon, idSpecies: this.getSpeciesIdByUrl(species.evolution_chain.url) })));
		};

		const $getEvolution = (pokemon: any) => {
			const evolves: any[] = [];
			const getEvolves = (chain: any) => {
				const evolutionId = this.getSpeciesIdByUrl(chain.species.url);
				evolves?.push({
					id: evolutionId,
					name: chain.species.name,
					url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolutionId}.png`,
				});

				if (chain.evolves_to.length) {
					getEvolves(chain.evolves_to[0]);
				}

				return evolves;
			};

			return this.pokemonService
				.getEvolution(pokemon.idSpecies)
				.pipe(map((evolution) => ({ ...pokemon, evolutions: getEvolves(evolution.chain) })));
		};

		this.pokemonService
			.get(this.id)
			.pipe(switchMap($getSpecies), switchMap($getEvolution))
			.subscribe((pokemon) => (this.pokemon = pokemon));
	}

	private getSpeciesIdByUrl(url: string): number {
		const splitUrl = url.split('/');
		return +splitUrl[splitUrl.length - 2];
	}
}
