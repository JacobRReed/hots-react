import './HeroModal.css';

import { Modal, makeStyles } from '@material-ui/core';

import { HeroMetaModal } from '../../models/HeroMetaModal';
import React from 'react';
import { StoreState } from '../../store/store';
import { connect } from 'react-redux';
import { setModalAction } from '../../store/actions';

interface SetDispatchProps {
	setModal: (meta: HeroMetaModal) => {};
}
type ModalProps = SetDispatchProps & HeroMetaModal;

const setMapToProps = (state: StoreState) => {
	return {
		show: state.modal.show,
		hero: state.modal.hero || undefined
	};
};

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		width: '80%',
		top: '30%',
		left: '50%',
		transform: 'translate(-50%, -50%) !important',
		borderRadius: '10px 10px',
		backgroundColor: '#2f2f2f',
		padding: theme.spacing(2, 4, 3),
		color: 'white',
		border: '1px solid rgba(100, 0, 139, 0.5)',
		outline: 'none'
	}
}));

const HeroModal: React.FC<ModalProps> = props => {
	const classes = useStyles();

	return (
		<Modal
			open={props.show}
			onClose={() => props.setModal({ show: false, hero: props.hero })}
		>
			<div className={classes.paper}>
				<div className="heroHeader">
					<h1 className="heroName">Heroname</h1>
					<h2 className="heroSubtitle">Herosubtitle</h2>
					<p>Some text here about the info blah blah blah blah blah</p>
				</div>
				<hr />
				<div className="Abilities">
					<h3 className="heroAbilities">Hero Abilities</h3>
				</div>
			</div>
		</Modal>
	);
};

export default connect(
	setMapToProps,
	{ setModal: setModalAction }
)(HeroModal);
