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
			<div className="App">
				<RaisedButton
					label="Login"
					style={styles.button}
					onClick={this.props.handleLogin}
				/>
			</div>
		)
	}
}

export default Login
