import { combineReducers } from 'redux'

import filterReducer from '../reducers/filter'
import pizzasReducer from '../reducers/pizzas'

const rootReducer = combineReducers({
	filter: filterReducer,
	pizzas: pizzasReducer,
})

export default rootReducer
