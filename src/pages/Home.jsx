import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Categories, PizzaBlock, Preloader, SortPopup } from '../components'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { getPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'


const categoryNames = [
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
]
const sortItems = [
	{ name: 'популярности', type: 'rating', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавиту', type: 'name', order: 'asc' },
]


const Home = () => {
	const dispatch = useDispatch()
	const items = useSelector(({ pizzas }) => pizzas.items)
	const isFetching = useSelector(({ pizzas }) => pizzas.isFetching)

	const { category, sortBy } = useSelector(({ filter }) => filter)

	useEffect(() => {
		dispatch(getPizzas(sortBy, category))
	}, [category, sortBy])

	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index))
	}, [])

	const onSelectSortType = useCallback((type) => {
		dispatch(setSortBy(type))
	}, [])

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					items={categoryNames}
					activeCategory={category}
					onClickCategory={(index) => onSelectCategory(index)}
				/>
				<SortPopup
					items={sortItems}
					activeSortType={sortBy.type}
					onSelectSortType={onSelectSortType}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isFetching
					? Array(12)
							.fill(0)
							.map((elem, index) => <Preloader key={`${elem}_${index}`} />)
					: items.map((pizza) => (
							<PizzaBlock
								{...pizza}
								onClickAddPizza={handleAddPizzaToCart}
								key={`${pizza.name}_${pizza.id}`}
							/>
					  ))}
			</div>
		</div>
	)
}

export default Home
