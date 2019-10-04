import { SET_HEROES, SET_MODAL, SET_ROLES, SET_SEARCH } from './actions';

import { Hero } from './../models/Hero';
import { HeroMetaModal } from './../models/HeroMetaModal';
import { combineReducers } from 'redux';

const roleReducer = (state: string[] = [], action: any) => {
	switch (action.type) {
		case SET_ROLES:
			return action.payload;
		default:
			return state;
	}
};

const searchReducer = (state: string = '', action: any) => {
	switch (action.type) {
		case SET_SEARCH:
			return action.payload;
		default:
			return state;
	}
};

const heroReducer = (state: Hero[] = [], action: any) => {
	switch (action.type) {
		case SET_HEROES:
			return action.payload;
		default:
			return state;
	}
};

const modalReducer = (state: HeroMetaModal = { show: false }, action: any) => {
	switch (action.type) {
		case SET_MODAL:
			return action.payload;
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	rolesSelected: roleReducer,
	heroSearchString: searchReducer,
	heroes: heroReducer,
	modal: modalReducer
});

export default rootReducer;
