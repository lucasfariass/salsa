import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeCardComponent } from './poke-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [PokeCardComponent],
	imports: [CommonModule, FormsModule],
	exports: [PokeCardComponent],
})
export class PokeCardModule {}
