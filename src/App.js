import React, { Component } from 'react'
import './styles/App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Check your working hours!</h1>
				</header>
				<div className="App-intro">
					Firebase API key:
					<code>{process.env.REACT_APP_FIREBASE_APIKEY}</code>.
				</div>
			</div>
		)
	}
}

export default App
