import { IHero } from '../models/IHeroCard'

export const SET_ROLES = 'SET_ROLES'
export const SET_SEARCH = 'SET_SEARCH'
export const SET_HEROES = 'SET_HEROES'

export const setRolesAction = (roles: string[]) => ({
  type: SET_ROLES,
  payload: roles
})

export const setSearchAction = (search: string) => ({
  type: SET_SEARCH,
  payload: search
})

export const setHeroesAction = (heroes: IHero[]) => ({
  type: SET_HEROES,
  payload: heroes
})
