import { SET_HEROES, SET_ROLES, SET_SEARCH } from './actions'

import { IHero } from '../models/IHeroCard'
import { combineReducers } from 'redux'

const roleReducer = (state: string[] = [], action: any) => {
  switch (action.type) {
    case SET_ROLES:
      return action.payload
    default:
      return state
  }
}

const searchReducer = (state: string = '', action: any) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.payload
    default:
      return state
  }
}

const heroReducer = (state: IHero[] = [], action: any) => {
  switch (action.type) {
    case SET_HEROES:
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  rolesSelected: roleReducer,
  heroSearchString: searchReducer
})

export default rootReducer
