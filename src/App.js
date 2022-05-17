import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Route, Routes } from 'react-router-dom'

import { Header } from './components'
import { Cart, Home } from './pages'
import {getPizzas} from './redux/actions/pizzas'



const App = () => {
  const dispatch = useDispatch()
  
	useEffect(() => {
		dispatch(getPizzas())
	}, [])

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
