import { Route, Routes } from "react-router-dom"
import {Header, } from "./components"
import { Cart, Home } from "./pages"







function App() {

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
        <Routes>
          <Route path ="/" component={Home} exact/>
          <Route path ="/cart" component={Cart} exact/>
        </Routes>
        
			</div>
		</div>
	)
}

export default App
