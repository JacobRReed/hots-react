import './HeroCard.css'

import { IHeroCard } from '../../models/IHeroCard'
import React from 'react'

const HeroCard: React.FC<IHeroCard> = props => {
  const divStyle = {
    backgroundImage:
      'url(' +
      process.env.PUBLIC_URL +
      '/assets/images/heroes/' +
      props.img +
      ')'
  }
  return <div className="HeroCard" style={divStyle}></div>
}

export default HeroCard
