import axios from 'axios'



export const pizzasAPI = {
	fetchPizzas(sortBy, category) {

		const categoryParam = (category === null) ? '' : ('category='+category)

		return axios
			.get(`/pizzas?${categoryParam}&_sort=${sortBy.type}&_order=${sortBy.order}`)
			.then(({ data }) => data)
	},
}
