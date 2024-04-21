export interface IPokemon {
	id: number;
	name: string;
	imageUrl: string;
	types: IPokemonType[];
	experience: number;
	height: number;
	weight: number;
	idSpecies?: number;
	evolutions?: IPokemonEvolution[];
	stats?: IPokemonStat[];
	abilities?: IPokemonAbility[];
	isFavorite?: boolean;
}

interface IPokemonType {
	name: string;
	url?: string;
}

interface IPokemonEvolution {
	id: number;
	name: string;
	url?: string;
}

interface IPokemonStat {
	value: string;
	name: string;
	url?: string;
}

interface IPokemonAbility {
	name: string;
	url?: string;
}
