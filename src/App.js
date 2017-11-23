import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './views/Home'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={() => <div>Not Found</div>} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
