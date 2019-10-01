import './HeroContainer.css'

import React, { useState } from 'react'

import HeroCardContainer from '../HeroCardContainer/HeroCardContainer'
import HeroSearchInput from '../../components/HeroSearchInput/HeroSearchInput'
import RoleIconFilters from '../../components/RoleIconFilters/RoleIconFilters'

const HeroContainer: React.FC = () => {
  const [enabledRoles, setEnabledRoles] = useState<string[]>([])

  const enableCardsByRole = (roles: string[]) => {
    setEnabledRoles(roles)
  }

  return (
    <div className="HeroContainer">
      <HeroSearchInput />
      <RoleIconFilters enableCards={enableCardsByRole} />
      <HeroCardContainer enabledRoles={enabledRoles} />
    </div>
  )
}

export default HeroContainer
