const SET_PIZZAS = 'SET_PIZZAS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


const initialState = {
	items: [],
	isFetching: false,
}

const pizzas = (state = initialState, action) => {
	switch (action.type) {
		case SET_PIZZAS:
			return {
				...state,
				items: action.payload,
			}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching }

		default:
			return state
	}
}

export default pizzas
