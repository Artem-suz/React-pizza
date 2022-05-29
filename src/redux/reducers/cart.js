// const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'
// const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_PIZZA_CART = 'SET_PIZZA_CART'

const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}

const cart = (state = initialState, action) => {
	switch (action.type) {
		case SET_PIZZA_CART:
			return {
				...state,
				items: {
					[action.payload.id]: [
						...state.items[action.payload.id],
						action.payload,
					],
				},
			}

		default:
			return state
	}
}

export default cart
