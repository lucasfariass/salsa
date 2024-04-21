import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
	selector: 'slt-poke-card',
	templateUrl: './poke-card.component.html',
	styleUrl: './poke-card.component.scss',
})
export class PokeCardComponent {
	@Input() public pokemon!: IPokemon;

	@Output() public onClick: EventEmitter<IPokemon> = new EventEmitter();

	constructor(private pokemonService: PokemonService) {}

	public onChange(): void {
		if (this.pokemon.isFavorite) {
			this.pokemonService.addFavorite(this.pokemon);
		} else {
			this.pokemonService.removeFavorite(this.pokemon);
		}
	}
}
