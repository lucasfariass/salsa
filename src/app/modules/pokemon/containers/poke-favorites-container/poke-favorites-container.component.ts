import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
import { IPokemon } from '../../models/pokemon.interface';

@Component({
	selector: 'slt-poke-favorites-container',
	templateUrl: './poke-favorites-container.component.html',
	styleUrl: './poke-favorites-container.component.scss',
})
export class PokeFavoritesContainer {
	public pokemons: IPokemon[] = [];
	constructor(private pokemonService: PokemonService, private router: Router) {
		this.getFavorites();

		this.pokemonService.$refreshFavorites.subscribe(() => this.getFavorites());
	}

	public goToDetails(pokemon: IPokemon): void {
		this.router.navigateByUrl(`/pokemon/${pokemon?.id}/details`);
	}

	public getFavorites(): void {
		this.pokemons = this.pokemonService.getFavorites();
	}
}
