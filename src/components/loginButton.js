import React from 'react'

const loginButton = ({ loggedIn, handleLogin, handleLogout }) => (
	<div className="App-login-button">
		<button onClick={loggedIn ? handleLogout : handleLogin}>
			{loggedIn ? 'Logout' : 'Login'}
		</button>
	</div>
)

export default loginButton
