import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from '../../../../shared/directives/infinite-scroll/infinite-scroll.module';
import { PokeCardModule } from '../../components/poke-card/poke-card.module';
import { PokeListContainer } from './poke-list-container.component';

@NgModule({
	declarations: [PokeListContainer],
	imports: [CommonModule, PokeCardModule, InfiniteScrollModule],
	exports: [PokeListContainer],
})
export class PokeListContainerModule {}
