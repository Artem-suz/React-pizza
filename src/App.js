
import { useDispatch } from 'react-redux'

import { Route, Routes } from 'react-router-dom'

import { Header } from './components'
import { Cart, Home } from './pages'

const App = () => {

	const dispatch = useDispatch()



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
