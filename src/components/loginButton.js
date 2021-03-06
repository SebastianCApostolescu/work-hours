import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'

import { Link } from 'react-router-dom'

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
        <Link to="/dashboard">
          <Avatar style={styles.avatar} src={user.photoURL} />{' '}
        </Link>
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
