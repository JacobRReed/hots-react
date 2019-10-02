import { SET_ROLES, SET_SEARCH } from './actions';

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

const rootReducer = combineReducers({
	rolesSelected: roleReducer,
	heroSearchString: searchReducer
});

export default rootReducer;
