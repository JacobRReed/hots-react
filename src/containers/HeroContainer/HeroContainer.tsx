import './HeroContainer.css'

import HeroCardContainer from '../HeroCardContainer/HeroCardContainer'
import HeroSearchInput from '../../components/HeroSearchInput/HeroSearchInput'
import React from 'react'

const HeroContainer: React.FC = () => {
  return (
    <div className="HeroContainer">
      <HeroSearchInput />
      <HeroCardContainer />
    </div>
  )
}

export default HeroContainer
