import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDetailsContainer } from './poke-details-container.component';
import { PokeDetailsModule } from '../../components/poke-details/poke-details.module';

@NgModule({
	declarations: [PokeDetailsContainer],
	imports: [CommonModule, PokeDetailsModule],
	exports: [PokeDetailsContainer],
})
export class PokeDetailsContainerModule {}
