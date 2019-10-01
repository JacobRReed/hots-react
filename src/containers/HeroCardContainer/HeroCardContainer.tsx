import './HeroCardContainer.css';

import React, { useEffect, useState } from 'react';

import HeroCard from '../../components/HeroCard/HeroCard';
import { IHeroCard as IHero } from '../../models/IHeroCard';

const heroCardList = require('../../models/hero-list.json');

interface IHeroCardContainerProps {
	enabledRoles: string[];
}

const HeroCardContainer: React.FC<IHeroCardContainerProps> = props => {
	const [heroes, setHeroes] = useState<IHero[]>(heroCardList);

	/**
	 * Sort heroes by enabled and alphabetically
	 */
	useEffect(() => {
		setHeroes(
			[...heroes]
				.map(hero => {
					return { ...hero, enabled: props.enabledRoles.includes(hero.role) };
				})
				.sort((a, b) => {
					if (a.enabled && b.enabled) {
						return a.name < b.name ? -1 : 1;
					} else if (a.enabled && !b.enabled) {
						return -1;
					} else if (!a.enabled && !b.enabled) {
						return a.name < b.name ? -1 : 1;
					} else {
						return 0;
					}
				})
		);
		// eslint-disable-next-line
	}, [props]);

	return (
		<div className="HeroCardContainer">
			{heroes.map((hero, index) => {
				return (
					<HeroCard
						key={index}
						img={hero.img}
						role={hero.role}
						name={hero.name}
						enabled={props.enabledRoles.includes(hero.role)}
					/>
				);
			})}
		</div>
	);
};

export default HeroCardContainer;
