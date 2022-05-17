import axios from 'axios'

// const instance = axios.create({
// 	baseURL: 'http://localhost:3001/pizzas',
// })

export const pizzasAPI = {
	fetchPizzas() {
		return axios.get('http://localhost:3001/pizzas').then(({ data }) => data)
	},
}
