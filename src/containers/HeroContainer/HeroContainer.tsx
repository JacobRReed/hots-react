import './HeroContainer.css';

import HeroCardContainer from '../HeroCardContainer/HeroCardContainer';
import HeroSearchInput from '../../components/HeroSearchInput/HeroSearchInput';
import React from 'react';
import RoleIconFilters from '../../components/RoleIconFilters/RoleIconFilters';

const HeroContainer: React.FC = () => {
	return (
		<div className="HeroContainer">
			<HeroSearchInput />
			<RoleIconFilters />
			<HeroCardContainer />
		</div>
	);
};

export default HeroContainer;
