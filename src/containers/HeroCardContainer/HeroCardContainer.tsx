import './HeroCardContainer.css'

import HeroCard from '../../components/HeroCard/HeroCard'
import { IHeroCard as IHero } from '../../models/IHeroCard'
import React from 'react'

const heroCardList = require('../../models/hero-list.json')

const HeroContainer: React.FC = () => {
  const heroes: IHero[] = heroCardList
  return (
    <div className="HeroCardContainer">
      {heroes.map((hero, index) => {
        return (
          <HeroCard
            key={index}
            img={hero.img}
            role={hero.role}
            name={hero.name}
          />
        )
      })}
    </div>
  )
}

export default HeroContainer
