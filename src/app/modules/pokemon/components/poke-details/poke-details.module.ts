import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDetailsComponent } from './poke-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [PokeDetailsComponent],
	imports: [CommonModule, RouterModule],
	exports: [PokeDetailsComponent],
})
export class PokeDetailsModule {}
