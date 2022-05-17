import { pizzasAPI } from '../../api/api'

export const getPizzas = () => (dispatch) => {
	pizzasAPI.fetchPizzas().then((data) => {
		dispatch(setPizzas(data))
	})
}

export const setPizzas = (pizzas) => {
	return { type: 'SET_PIZZAS', payload: pizzas }
}
