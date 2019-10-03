import './HeroCard.css'

import { IHero } from '../../models/IHeroCard'
import React from 'react'

const HeroCard: React.FC<IHero> = props => {
  const divStyle = {
    backgroundImage:
      'url(' +
      process.env.PUBLIC_URL +
      '/assets/images/heroes/' +
      props.img +
      '.jpg)'
  }
  return (
    <div
      className={props.enabled ? 'HeroCard' : 'HeroCard disabled'}
      style={divStyle}
      title={props.name}
    ></div>
  )
}

export default HeroCard
