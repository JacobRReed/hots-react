import './HeroCardContainer.css';

import React, { useEffect, useState } from 'react';

import HeroCard from '../../components/HeroCard/HeroCard';
import { IHeroCard as IHero } from '../../models/IHeroCard';
import { StoreState } from '../../store/store';
import { connect } from 'react-redux';
import heroesCompareFn from '../../utils/HeroesCompareFn';

const heroCardList = require('../../models/hero-list.json');

interface StateProps {
	rolesSelected: string[];
	searchString: string;
}

const mapStateToProps = (state: StoreState) => {
	const slice: StateProps = {
		rolesSelected: state.rolesSelected,
		searchString: state.heroSearchString
	};
	return slice;
};

const HeroCardContainer: React.FC<StateProps> = props => {
	const [heroes, setHeroes] = useState<IHero[]>(heroCardList);

	// When role selection changes
	useEffect(() => {
		setHeroes(
			[...heroes]
				.map(hero => {
					return { ...hero, enabled: props.rolesSelected.includes(hero.role) };
				})
				.sort(heroesCompareFn)
		);
		// eslint-disable-next-line
	}, [props.rolesSelected]);

	// When search changes
	useEffect(() => {
		setHeroes(
			[...heroes]
				.map(hero => {
					let heroChecked: IHero = {
						...hero,
						enabled: hero.name.toLowerCase().includes(props.searchString)
					};
					console.log(heroChecked);
					return heroChecked;
				})
				.sort(heroesCompareFn)
		);
	}, [props.searchString]);

	return (
		<div className="HeroCardContainer">
			{heroes.map((hero, index) => {
				return (
					<HeroCard
						key={index}
						img={hero.img}
						role={hero.role}
						name={hero.name}
						enabled={props.rolesSelected.includes(hero.role)}
					/>
				);
			})}
		</div>
	);
};

export default connect(mapStateToProps)(HeroCardContainer);
