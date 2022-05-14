import axios from 'axios'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { Header } from './components'
import { Cart, Home } from './pages'
import { setPizzas } from './redux/actions/pizzas'
import filter from './redux/reducers/filter'


function App(props) {
	console.log(props)
	useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			props.setPizzas(data.pizzas)
		})
	}, [])

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/home" element={<Home pizzas={[]} />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	items: state.pizzas.items,
	filter: state.filter,
})

const mapDispatchToProps = {
	setPizzas,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
