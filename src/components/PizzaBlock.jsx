import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'

function PizzaBlock({ imageUrl, name, price, sizes, types }) {
	const typeNames = ['тонкое', 'традиционное']
	const [activeType, setActiveType] = useState(types[0])
	const availableSizes = [26, 30, 40]
	const [activeSize, setActiveSize] = useState(sizes[0])
	const onSelectSize = (size) => {
		setActiveSize(size)
	}
	const onSelectType = (index) => {
		setActiveType(index)
	}

  return<ContentLoader 
  speed={2}
  width={280}
  height={460}
  viewBox="0 0 280 460"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
  // {...props}
>
  <rect x="5" y="255" rx="3" ry="3" width="274" height="26" /> 
  <rect x="82" y="335" rx="0" ry="0" width="1" height="1" /> 
  <rect x="4" y="293" rx="6" ry="6" width="280" height="84" /> 
  <rect x="165" y="408" rx="0" ry="0" width="0" height="1" /> 
  <rect x="5" y="399" rx="3" ry="3" width="83" height="31" /> 
  <rect x="66" y="454" rx="0" ry="0" width="1" height="0" /> 
  <circle cx="127" cy="120" r="115" /> 
  <rect x="139" y="390" rx="25" ry="25" width="140" height="46" />
</ContentLoader>


	// return (
	// 	<div className="pizza-block">
	// 		<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
	// 		<h4 className="pizza-block__title">{name}</h4>
	// 		<div className="pizza-block__selector">
	// 			<ul>
	// 				{typeNames.map((type, index) => (
	// 					<li
	// 						onClick={() => onSelectType(index)}
	// 						className={classNames({
	// 							active: activeType === index,
	// 							disabled: !types.includes(index),
	// 						})}
	// 						key={`${type}_${index}`}
	// 					>
	// 						{type}
	// 					</li>
	// 				))}
	// 			</ul>
	// 			<ul>
	// 				{availableSizes.map((size, index) => (
	// 					<li
	// 						onClick={() => onSelectSize(size)}
	// 						className={classNames({
	// 							active: activeSize === size,
	// 							disabled: !sizes.includes(size),
	// 						})}
	// 						key={`${size}_${index}`}
	// 					>
	// 						{size} см.
	// 					</li>
	// 				))}
	// 			</ul>
	// 		</div>
	// 		<div className="pizza-block__bottom">
	// 			<div className="pizza-block__price">от {price} ₽</div>
	// 			<div className="button button--outline button--add">
	// 				<svg
	// 					width="12"
	// 					height="12"
	// 					viewBox="0 0 12 12"
	// 					fill="none"
	// 					xmlns="http://www.w3.org/2000/svg"
	// 				>
	// 					<path
	// 						d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
	// 						fill="white"
	// 					/>
	// 				</svg>
	// 				<span>Добавить</span>
	// 				<i>2</i>
	// 			</div>
	// 		</div>
	// 	</div>
	// )
}

PizzaBlock.propTypes = {
	name: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
	types: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default PizzaBlock
