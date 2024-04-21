import { Component, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
	selector: 'slt-poke-list-container',
	templateUrl: './poke-list-container.component.html',
	styleUrl: './poke-list-container.component.scss',
})
export class PokeListContainer implements OnDestroy {
	constructor(private pokemonService: PokemonService, private router: Router) {
		this.loadMore();
	}

	get pokemons() {
		return this.pokemonService.pokemons;
	}

	public ngOnDestroy(): void {
		this.pokemonService.clear();
	}

	public goToDetails(pokemon: IPokemon): void {
		this.router.navigateByUrl(`/pokemon/${pokemon?.id}/details`);
	}

	public loadMore(): void {
		this.pokemonService.getNext().subscribe();
	}
}
