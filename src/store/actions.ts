import { Hero } from './../models/Hero';
import { HeroMetaModal } from './../models/HeroMetaModal';

export const SET_ROLES = 'SET_ROLES';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_HEROES = 'SET_HEROES';
export const SET_MODAL = 'SET_MODAL';

export const setRolesAction = (roles: string[]) => ({
	type: SET_ROLES,
	payload: roles
});

export const setSearchAction = (search: string) => ({
	type: SET_SEARCH,
	payload: search
});

export const setHeroesAction = (heroes: Hero[]) => ({
	type: SET_HEROES,
	payload: heroes
});

export const setModalAction = (meta: HeroMetaModal) => ({
	type: SET_MODAL,
	payload: meta
});
