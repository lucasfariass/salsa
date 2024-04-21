import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokeListContainerModule } from './containers/poke-list-container/poke-list-container.module';
import { PokeFavoritesContainerModule } from './containers/poke-favorites-container/poke-favorites-container.module';
import { PokeDetailsContainerModule } from './containers/poke-details-container/poke-details-container.module';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		PokemonRoutingModule,
		HttpClientModule,
		PokeListContainerModule,
		PokeFavoritesContainerModule,
		PokeDetailsContainerModule,
	],
	providers: [PokemonService],
})
export class PokemonModule {}
