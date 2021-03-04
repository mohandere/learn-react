import { createSelector } from 'reselect'

export const newsSelector = state => state.shop.items

export const totalNewsSelector = createSelector(
  newsSelector,
  items => items.length
)
