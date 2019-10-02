import './HeroSearchInput.css';

import React, { ChangeEvent } from 'react';

import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { setSearchAction } from '../../store/actions';

interface DispatchProps {
	setSearch: (str: string) => {};
}

const HeroSearchInput: React.FC<DispatchProps> = props => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.setSearch(e.target.value);
	};

	return (
		<div className="HeroSearchInput">
			<TextField
				autoComplete="true"
				label="Search for a hero"
				fullWidth={true}
				onChange={handleChange}
			/>
		</div>
	);
};

export default connect(
	null,
	{ setSearch: setSearchAction }
)(HeroSearchInput);
