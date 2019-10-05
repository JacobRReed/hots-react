import './HeroModal.css'

import { Ability, Talent } from '../../models/Hero'
import { AppBar, Modal, Tab, Tabs, makeStyles } from '@material-ui/core'

import { HeroMetaModal } from '../../models/HeroMetaModal'
import HeroModalTabs from '../../components/HeroModalTabs/HeroModalTabs'
import React from 'react'
import { StoreState } from '../../store/store'
import { connect } from 'react-redux'
import { setModalAction } from '../../store/actions'

interface SetDispatchProps {
  setModal: (meta: HeroMetaModal) => {}
}
type ModalProps = SetDispatchProps & HeroMetaModal

const setMapToProps = (state: StoreState) => {
  return {
    show: state.modal.show,
    hero: state.modal.hero || undefined
  }
}

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
    border: '3px dotted  rgba(100, 0, 139, 0.5)',
    outline: 'none'
  }
}))

const HeroModal: React.FC<ModalProps> = props => {
  const classes = useStyles()

  let abilities: Ability[] = [
    {
      owner: 'Abathur',
      name: 'Symbiote',
      title: 'Evolution Master',
      description: 'Description',
      icon: 'test',
      hotkey: 'Q',
      mana_cost: 15,
      cooldown: 12,
      trait: false
    },
    {
      owner: 'Abathur',
      name: 'Toxic Mine',
      title: 'Evolution Master',
      description: 'Description',
      icon: 'test',
      hotkey: 'W',
      mana_cost: 15,
      cooldown: 12,
      trait: false
    }
  ]
  let talents: Talent[] = [
    {
      name: 'Talent name',
      title: 'title',
      description: 'Good talent',
      icon: '',
      icon_url: { '64x64': '' },
      ability: 'test',
      sort: 1,
      cooldown: 12,
      mana_cost: 15,
      level: 1
    },
    {
      name: 'Talent name',
      title: 'title',
      description: 'Good talent',
      icon: '',
      icon_url: { '64x64': '' },
      ability: 'test',
      sort: 1,
      cooldown: 12,
      mana_cost: 15,
      level: 1
    }
  ]

  return (
    <Modal
      open={props.show}
      onClose={() => props.setModal({ show: false, hero: props.hero })}
    >
      <div className={classes.paper}>
        <div className="heroHeader">
          <h1 className="heroName">Abathur</h1>
          <h2 className="heroSubtitle">Evolution Master</h2>
          <p className="hero-info">
            Abathur, the Evolution Master of Kerrigan's Swarm, works ceaselessly
            to improve the zerg from the genetic level up. His hate for chaos
            and imperfection almost rivals his hatred of pronouns.
          </p>
        </div>
        <hr />

        <HeroModalTabs abilities={abilities} talents={talents} />
      </div>
    </Modal>
  )
}

export default connect(
  setMapToProps,
  { setModal: setModalAction }
)(HeroModal)
