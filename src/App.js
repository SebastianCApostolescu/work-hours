import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Home from './views/Home'

const App = () => {
	return (
		<MuiThemeProvider>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={() => <div>Not Found</div>} />
				</Switch>
			</BrowserRouter>
		</MuiThemeProvider>
	)
}

export default App
