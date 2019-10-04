export interface Hero {
	name: string;
	short_name: string;
	attribute_id: string;
	translations: string[];
	role: string;
	type: string;
	release_date: Date;
	icon_url: {
		'92x93': string;
	};
	abilities: Ability[];
	talents: Talent[];
	enabled: boolean;
	img: string;
}

export interface Talent {
	name: string;
	title: string;
	description: string;
	icon: string;
	icon_url: { '64x64': string };
	ability: string;
	sort: number;
	cooldown: number;
	mana_cost: number;
	level: number;
}

export interface Ability {
	owner: string;
	name: string;
	title: string;
	description: string;
	icon: any;
	hotkey: string;
	mana_cost: number;
	cooldown: number;
	trait: boolean;
}
