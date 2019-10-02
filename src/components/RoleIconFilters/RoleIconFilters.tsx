import './RoleIconFilters.css';

import React from 'react';
import { RoleTypes } from '../../models/RoleTypes';
import { StoreState } from '../../store/store';
import { connect } from 'react-redux';
import { setRolesAction } from '../../store/actions';

interface IRoleIconFiltersProps {
	rolesSelected: string[];
	onSet(roles: string[]): any;
}

const mapStateToProps = (state: StoreState) => {
	return {
		rolesSelected: state.rolesSelected
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onSet: (roles: string[]) => {
			dispatch(setRolesAction(roles));
		}
	};
};

const RoleIconFilters: React.FC<IRoleIconFiltersProps> = props => {
	const roles: string[] = RoleTypes;

	/**
	 * Role selection handler
	 * @param role role to add or remove
	 */
	const roleSelectHandler = (role: string) => {
		let currRoles: string[] = [...props.rolesSelected];
		let roles: string[] = [];
		if (currRoles.includes(role)) {
			roles = currRoles.filter(r => r !== role);
		} else {
			roles = [...props.rolesSelected, role];
		}
		props.onSet(roles);
	};

	return (
		<div className="RoleIconFilters">
			{roles.map((role, index) => {
				return (
					<img
						alt={role}
						key={index}
						className={props.rolesSelected.includes(role) ? 'selected' : ''}
						src={
							process.env.PUBLIC_URL + '/assets/images/roles/' + role + '.png'
						}
						onClick={() => {
							roleSelectHandler(role);
						}}
					></img>
				);
			})}
		</div>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RoleIconFilters);
