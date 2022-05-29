import { combineReducers } from 'redux'

import filterReducer from '../reducers/filter'
import pizzasReducer from '../reducers/pizzas'
import cartReducer from '../reducers/cart'

const rootReducer = combineReducers({
	filter: filterReducer,
	pizzas: pizzasReducer,
  cart: cartReducer,
})

export default rootReducer
