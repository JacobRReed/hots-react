import './HeroContainer.css';

import React, { useEffect } from 'react';

import { Hero } from '../../models/Hero';
import HeroCardContainer from '../HeroCardContainer/HeroCardContainer';
import HeroSearchInput from '../../components/HeroSearchInput/HeroSearchInput';
import RoleIconFilters from '../../components/RoleIconFilters/RoleIconFilters';
import { connect } from 'react-redux';
import { setHeroesAction } from '../../store/actions';

interface DispatchProps {
	setHeroes: (heroes: Hero[]) => {};
}

const HeroContainer: React.FC<DispatchProps> = props => {
	useEffect(() => {
		fetch('https://hotsapi.net/api/v1/heroes')
			.then(res => res.json())
			.then(res => {
				props.setHeroes(res);
			});
	}, [props]);

	return (
		<div className="HeroContainer">
			<HeroSearchInput />
			<RoleIconFilters />
			<HeroCardContainer />
		</div>
	);
};

export default connect(
	null,
	{ setHeroes: setHeroesAction }
)(HeroContainer);
