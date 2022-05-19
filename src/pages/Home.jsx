import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Categories, PizzaBlock, Preloader, SortPopup } from '../components'
import { setCategory, setSortBy } from '../redux/actions/filters'

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

const Home = () => {
	const dispatch = useDispatch()
	const items = useSelector(({ pizzas }) => pizzas.items)
	const isFetching = useSelector(({ pizzas }) => pizzas.isFetching)
	const { category, sortBy } = useSelector(({ filter }) => filter)

	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index))
	}, [])

  const onSelectSortType = useCallback((type) => {
		dispatch(setSortBy(type))
	}, [])

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					items={categoryNames}
          activeCategory={category}
					onClickCategory={(index) => onSelectCategory(index)}
				/>
				<SortPopup items={sortItems} activeSortType={sortBy} onSelectSortType={onSelectSortType}/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isFetching
					? Array(12)
							.fill(0)
							.map((elem, index) => <Preloader key={`${elem}_${index}`} />)
					: items.map((pizza) => (
							<PizzaBlock {...pizza} key={`${pizza.name}_${pizza.id}`} />
					  ))}
			</div>
		</div>
	)
}

export default Home
