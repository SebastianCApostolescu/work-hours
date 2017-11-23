import React, { Component } from 'react'
import LoginButton from './loginButton'

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<h1 className="App-title">{this.props.text}</h1>
				<LoginButton
					loggedIn={this.props.loggedIn}
					handleLogin={this.props.handleLogin}
					handleLogout={this.props.handleLogout}
					test="hi"
				/>
			</header>
		)
	}
}

export default Header
