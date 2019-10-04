import './HeroCard.css';

import { HeroMetaModal } from '../../models/HeroMetaModal';
import { IHero } from '../../models/IHeroCard';
import React from 'react';
import { connect } from 'react-redux';
import { setModalAction } from '../../store/actions';

interface SetDispatchProps {
	setModal: (meta: HeroMetaModal) => {};
}
type HeroCard = IHero & SetDispatchProps;

const HeroCard: React.FC<HeroCard> = props => {
	const divStyle = {
		backgroundImage:
			'url(' +
			process.env.PUBLIC_URL +
			'/assets/images/heroes/' +
			props.img +
			'.jpg)'
	};

	return (
		<div
			className={props.enabled ? 'HeroCard' : 'HeroCard disabled'}
			style={divStyle}
			title={props.name}
			onClick={() => {
				if (props.enabled) props.setModal({ show: true });
			}}
		></div>
	);
};

export default connect(
	null,
	{ setModal: setModalAction }
)(HeroCard);
