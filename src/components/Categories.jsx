import PropTypes from 'prop-types'
import React from 'react'

const Categories = React.memo(({ items, onClickCategory, activeCategory }) => {
	return (
		<div className="categories">
			<ul>
				<li
					onClick={() => onClickCategory(null)}
					className={activeCategory === null ? 'active' : ''}
				>
					Все
				</li>
				{items &&
					items.map((name, index) => (
						<li
							onClick={() => onClickCategory(index)}
							className={activeCategory === index ? 'active' : ''}
							key={`${name}_${index}`}
						>
							{name}
						</li>
					))}
			</ul>
		</div>
	)
})

export default Categories

Categories.defaultProps = {
	activeCategory: null,
	items: [],
}

Categories.propTypes = {
	items: PropTypes.array.isRequired,
	onClickCategory: PropTypes.func.isRequired,
	// activeCategory: PropTypes.oneOf([PropTypes.number, null]),
	activeCategory: PropTypes.oneOfType([
		PropTypes.number.isRequired,
		PropTypes.oneOf([null]).isRequired,
	]),
}
