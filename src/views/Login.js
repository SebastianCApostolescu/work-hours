import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
	root: {
		display: 'inline-flex'
	},
	button: {
		marginTop: 6
	},
	buttonStyle: {
		height: '36px'
	},
	avatar: {
		margin: 5
	}
}

class Login extends Component {
	render() {
		return (
			<button
				className="loginBtn loginBtn--google"
				onClick={this.props.handleLogin}
			>
				Login
			</button>
		)
	}
}

export default Login
