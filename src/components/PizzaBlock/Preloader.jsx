import ContentLoader from 'react-content-loader'

function Preloader() {
	return (
		<ContentLoader
			className="pizza-block"
			speed={2}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
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
	)
}

export default Preloader
