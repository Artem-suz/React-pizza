const SET_PIZZA_CART = 'SET_PIZZA_CART'
const CLEAR_CART = 'CLEAR_CART'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
const PLUS_CART_ITEM = 'PLUS_CART_ITEM'
const MINUS_CART_ITEM = 'MINUS_CART_ITEM'

const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = (state = initialState, action) => {
	switch (action.type) {
		case SET_PIZZA_CART: {
			const currentPizzaItems = !state.items[action.payload.id]
				? [action.payload]
				: [...state.items[action.payload.id].items, action.payload]

			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentPizzaItems,
					totalPrice: getTotalPrice(currentPizzaItems),
				},
			}

			const items = Object.values(newItems).map((obj) => obj.items)
			const allPizzas = [].concat.apply([], items)
			const totalPrice = getTotalPrice(allPizzas)

			return {
				...state,
				items: newItems,
				totalCount: allPizzas.length,
				totalPrice: totalPrice,
			}
		}
		case CLEAR_CART: {
			return {
				items: {},
				totalPrice: 0,
				totalCount: 0,
			}
		}
		case REMOVE_CART_ITEM: {
			const newItems = {
				...state.items,
			}

			const currentTotalPrice = newItems[action.payload].totalPrice
			const currentTotalCount = newItems[action.payload].items.length
			delete newItems[action.payload]

			return {
				...state,
				items: newItems,
				totalPrice: state.totalPrice - currentTotalPrice,
				totalCount: state.totalCount - currentTotalCount,
			}
		}
		case PLUS_CART_ITEM: {
			const newItems = [
				...state.items[action.payload].items,
				state.items[action.payload].items[0],
			]
			return {
				...state,
				items: {
					...state.items,
					[action.payload]: {
						items: newItems,
						totalPrice: getTotalPrice(newItems),
					},
				},
			}
		}
		case MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload].items
			const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
      
      
      const currentTotalCount = newItems.length
      
			return {
				...state,
				items: {
					...state.items,
					[action.payload]: {
						items: newItems,
						totalPrice: getTotalPrice(newItems),
					},
				},
        
			}
		}
		default:
			return state
	}
}

export default cart
