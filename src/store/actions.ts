export const SET_ROLES = 'SET_ROLES';
export const SET_SEARCH = 'SET_SEARCH';

export const setRolesAction = (roles: string[]) => ({
	type: SET_ROLES,
	payload: roles
});

export const setSearchAction = (search: string) => ({
	type: SET_SEARCH,
	payload: search
});
