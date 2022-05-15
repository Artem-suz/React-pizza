import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Categories, PizzaBlock, SortPopup } from '../components'
import { setCategory } from '../redux/actions/filters'

const Home = () => {
	const dispatch = useDispatch()
	const items = useSelector(({ pizzas }) => pizzas.items)
  debugger
	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index))
	}, [])
	const categoryNames = [
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]
	const sortItems = [
		{ name: 'популярности', type: 'popular' },
		{ name: 'цене', type: 'price' },
		{ name: 'алфавиту', type: 'alphabet' },
	]

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					items={categoryNames}
					onClickItem={(index) => onSelectCategory(index)}
				/>
				<SortPopup items={sortItems} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{items &&
					items.map((pizza) => (
						<PizzaBlock {...pizza} key={`${pizza.name}_${pizza.id}`} />
					))}
			</div>
		</div>
	)
}

export default Home
