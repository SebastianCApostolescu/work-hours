import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import './styles/materialize-grid.css'

import Home from './views/Home'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Header from './components/header'

import { connect } from 'react-redux'
import { loginAction, logoutAction, setUserAction } from './actions/authActions'

import { auth, provider } from './firebase'

const styles = {
  spinner: {
    position: 'absolute',
    left: '50%',
    top: '20%'
  }
}

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  )
}

class App extends Component {
  componentDidMount() {
    const { setUser, logout } = this.props
    this.removeListener = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        logout()
      }
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }

  render() {
    const { authed, user, loading, login, logout } = this.props
    return (
      <MuiThemeProvider>
        {loading ? (
          <CircularProgress size={60} style={styles.spinner} />
        ) : (
          <BrowserRouter>
            <div>
              <Header
                text={<Link to="/">Work Hours</Link>}
                loggedIn={authed}
                handleLogin={login}
                handleLogout={logout}
                user={user}
              />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <PublicRoute
                    authed={authed}
                    path="/login"
                    component={props => (
                      <Login {...props} handleLogin={login} />
                    )}
                  />
                  <PrivateRoute
                    path="/dashboard"
                    authed={authed}
                    component={props => <Dashboard {...props} user={user} />}
                  />
                  <Route component={() => <div>Not Found</div>} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        )}
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    authed: state.auth.authed,
    loading: state.auth.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      console.log('login')
      auth.signInWithPopup(provider).then(result => {
        const user = result.user
        console.log(user)
        dispatch(loginAction(user))
        window.location.href = '/dashboard'
      })
    },
    logout: () => {
      console.log('logout')
      auth.signOut().then(() => {
        dispatch(logoutAction())
      })
    },
    setUser: user => {
      dispatch(setUserAction(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
