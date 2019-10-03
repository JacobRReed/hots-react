import { IHero } from '../models/IHeroCard'

const heroesCompareFn = (a: IHero, b: IHero) => {
  if (a.enabled && b.enabled) {
    return a.name < b.name ? -1 : 1
  } else if (a.enabled && !b.enabled) {
    return -1
  } else if (!a.enabled && !b.enabled) {
    return a.name < b.name ? -1 : 1
  } else {
    return 0
  }
}

export default heroesCompareFn
