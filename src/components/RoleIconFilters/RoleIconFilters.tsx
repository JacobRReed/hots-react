import './RoleIconFilters.css'

import React, { useEffect, useState } from 'react'

import { RoleTypes } from '../../models/RoleTypes'

interface IRoleIconFiltersProps {
  enableCards(roles: string[]): any
}

const RoleIconFilters: React.FC<IRoleIconFiltersProps> = props => {
  const roles: string[] = RoleTypes

  const [rolesSelected, setRolesSelected] = useState<string[]>([...roles])

  useEffect(() => {
    props.enableCards(rolesSelected)
  }, [props, rolesSelected])

  /**
   * Role selection handler
   * @param role role to add or remove
   */
  const roleSelectHandler = (role: string) => {
    let currRoles: string[] = [...rolesSelected]
    let roles: string[] = []
    if (currRoles.includes(role)) {
      roles = currRoles.filter(r => r !== role)
    } else {
      roles = [...rolesSelected, role]
    }
    setRolesSelected(roles)
  }

  return (
    <div className="RoleIconFilters">
      {roles.map((role, index) => {
        return (
          <img
            alt={role}
            key={index}
            className={rolesSelected.includes(role) ? 'selected' : ''}
            src={
              process.env.PUBLIC_URL + '/assets/images/roles/' + role + '.png'
            }
            onClick={() => {
              roleSelectHandler(role)
            }}
          ></img>
        )
      })}
    </div>
  )
}

export default RoleIconFilters
