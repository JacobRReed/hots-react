import './HeroCardContainer.css'

import HeroCard from '../../components/HeroCard/HeroCard'
import { IHeroCard as IHero } from '../../models/IHeroCard'
import React from 'react'

const heroCardList = require('../../models/hero-list.json')

interface IHeroCardContainerProps {
  enabledRoles: string[]
}

const HeroCardContainer: React.FC<IHeroCardContainerProps> = props => {
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
            enabled={props.enabledRoles.includes(hero.role)}
          />
        )
      })}
    </div>
  )
}

export default HeroCardContainer
