import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'

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

const loginButton = ({ loggedIn, handleLogin, handleLogout, logged, user }) => (
	<div>
		{logged ? (
			<div style={styles.root}>
				<Avatar style={styles.avatar} src={user.photoURL} />
				<div style={{ height: '100%' }}>
					<RaisedButton
						label="Logout"
						style={styles.button}
						buttonStyle={styles.buttonStyle}
						overlayStyle={styles.buttonStyle}
						onClick={handleLogout}
					/>
				</div>
			</div>
		) : (
			<RaisedButton label="Login" style={styles.button} onClick={handleLogin} />
		)}
	</div>
)

export default loginButton
