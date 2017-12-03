import React, { Component } from 'react'

class Login extends Component {
	render() {
		return (
			<button
				className="loginBtn loginBtn--google"
				onClick={this.props.handleLogin}
			>
				Login with Google
			</button>
		)
	}
}

export default Login
