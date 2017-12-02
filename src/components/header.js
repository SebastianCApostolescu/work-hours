import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import LogginButton from './loginButton'

const styles = {
	button: {
		marginTop: 6
	}
}

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<AppBar
					showMenuIconButton={false}
					title={this.props.text}
					iconElementRight={
						this.props.loggedIn ? (
							<LogginButton
								logged={true}
								handleLogout={this.props.handleLogout}
								user={this.props.user}
							/>
						) : (
							<LogginButton
								logged={false}
								handleLogin={this.props.handleLogin}
							/>
						)
					}
				/>
			</header>
		)
	}
}

export default Header
