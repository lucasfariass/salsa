import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeFavoritesContainer } from './poke-favorites-container.component';
import { PokeCardModule } from '../../components/poke-card/poke-card.module';

@NgModule({
	declarations: [PokeFavoritesContainer],
	imports: [CommonModule, PokeCardModule],
	exports: [PokeFavoritesContainer],
})
export class PokeFavoritesContainerModule {}
