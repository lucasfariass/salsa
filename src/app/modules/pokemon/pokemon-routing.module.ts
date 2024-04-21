import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { PokeListContainer } from './containers/poke-list-container/poke-list-container.component';
import { PokeFavoritesContainer } from './containers/poke-favorites-container/poke-favorites-container.component';
import { PokeDetailsContainer } from './containers/poke-details-container/poke-details-container.component';

const routes: Routes = [
	{
		path: '',
		component: PokeListContainer,
	},
	{
		path: 'favorites',
		component: PokeFavoritesContainer,
	},
	{
		path: ':id/details',
		component: PokeDetailsContainer,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PokemonRoutingModule {}
