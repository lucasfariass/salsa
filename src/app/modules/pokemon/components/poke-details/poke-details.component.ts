import { Component, Input } from '@angular/core';
import { IPokemon } from '../../models/pokemon.interface';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'slt-poke-details',
	templateUrl: './poke-details.component.html',
	styleUrl: './poke-details.component.scss',
})
export class PokeDetailsComponent {
	@Input() public pokemon!: IPokemon;

	constructor(private location: Location, private router: Router) {}

	public goToDetails(id: number): void {
		this.router.navigateByUrl(`/pokemon/${id}/details`, { skipLocationChange: true });
	}

	public goBack(): void {
		this.location.back();
	}
}
