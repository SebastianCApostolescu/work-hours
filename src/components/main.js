import React, { Component } from 'react'
import '../styles/materialize-grid.css'

class Main extends Component {
	render() {
		return (
			<main className="container">
				<div>
					{!this.props.loggedIn &&
						'Hey Stranger... In order to use this app you need to Login with your Google Account'}
					{this.props.loggedIn && 'Welcome'}
				</div>
			</main>
		)
	}
}

export default Main
