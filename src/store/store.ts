import { RoleTypes } from '../models/RoleTypes';
import { createStore } from 'redux';
import rootReducer from './reducers';

export interface StoreState {
	rolesSelected: string[];
	heroSearchString: string;
}

export const store = createStore(
	rootReducer,
	{ rolesSelected: RoleTypes },
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
