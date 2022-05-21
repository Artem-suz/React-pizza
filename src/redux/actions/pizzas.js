import { pizzasAPI } from '../../api/api'

export const getPizzas = (sortBy, category) => (dispatch) => {
	dispatch(toggleIsFetching(true))
	pizzasAPI.fetchPizzas(sortBy, category).then((data) => {
		dispatch(setPizzas(data))

		dispatch(toggleIsFetching(false))
	})
}

export const setPizzas = (pizzas) => {
	return { type: 'SET_PIZZAS', payload: pizzas }
}

export const toggleIsFetching = (isFetching) => {
	return { type: 'TOGGLE_IS_FETCHING', isFetching }
}
