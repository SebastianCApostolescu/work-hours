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
import { login, logout } from './actions/authActions'
import { Provider } from 'react-redux'
import store from './store'

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
<<<<<<< HEAD
	componentDidMount() {
		this.removeListener = auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({
					user: user,
					authed: true,
					loading: false
				})
			} else {
				this.setState({
					user: null,
					authed: false,
					loading: false
				})
			}
		})
	}
	componentWillUnmount() {
		this.removeListener()
	}

	// login = () => {
	// 	console.log('login')
	// 	auth.signInWithPopup(provider).then(result => {
	// 		const user = result.user
	// 		console.log(user)
	// 		this.setState({
	// 			user: user,
	// 			authed: true
	// 		})
	// 		window.location.href = '/dashboard'
	// 	})
	// }

	// logout = () => {
	// 	console.log('logout')
	// 	auth.signOut().then(() => {
	// 		this.setState({
	// 			user: null,
	// 			authed: false
	// 		})
	// 	})
	// }

	render() {
		return (
			<MuiThemeProvider>
				<Provider store={store}>
					{this.state.loading ? (
						<CircularProgress size={60} style={styles.spinner} />
					) : (
						<BrowserRouter>
							<div>
								<Header
									text={<Link to="/">Work Hours</Link>}
									loggedIn={this.state.authed}
									handleLogin={this.login}
									handleLogout={this.logout}
									user={this.state.user}
								/>
								<div className="container">
									<Switch>
										<Route exact path="/" component={Home} />
										<PublicRoute
											authed={this.state.authed}
											path="/login"
											component={props => (
												<Login {...props} handleLogin={this.login} />
											)}
										/>
										<PrivateRoute
											path="/dashboard"
											authed={this.state.authed}
											component={props => (
												<Dashboard {...props} user={this.state.user} />
											)}
										/>
										<Route component={() => <div>Not Found</div>} />
									</Switch>
								</div>
							</div>
						</BrowserRouter>
					)}
				</Provider>
			</MuiThemeProvider>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		authed: state.authed,
		loading: state.loading
	}
}
const mapDispatchToProps = dispatch => {
	return {
		login: user => {
			dispatch(login(user))
		},
		logout: () => {
			dispatch(logout())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
=======
  state = {
    user: null,
    authed: false,
    loading: true
  }
  componentDidMount() {
    this.removeListener = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user,
          authed: true,
          loading: false
        })
      } else {
        this.setState({
          user: null,
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }

  login = () => {
    console.log('login')
    auth
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user
        console.log(user)
        this.setState({
          user: user,
          authed: true
        })
      })
      .catch(error => {
        console.log('Something went wrong: ', error.message)
      })
    window.location.href = '/dashboard'
  }

  logout = () => {
    console.log('logout')
    auth.signOut().then(() => {
      this.setState({
        user: null,
        authed: false
      })
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        {this.state.loading ? (
          <CircularProgress size={60} style={styles.spinner} />
        ) : (
          <BrowserRouter>
            <div>
              <Header
                text={<Link to="/">Work Hours</Link>}
                loggedIn={this.state.authed}
                handleLogin={this.login}
                handleLogout={this.logout}
                user={this.state.user}
              />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <PublicRoute
                    authed={this.state.authed}
                    path="/login"
                    component={props => (
                      <Login {...props} handleLogin={this.login} />
                    )}
                  />
                  <PrivateRoute
                    path="/dashboard"
                    authed={this.state.authed}
                    component={props => (
                      <Dashboard {...props} user={this.state.user} />
                    )}
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
export default App
>>>>>>> 99a167ae19b9bad30d9d0e23b44c2de63e6a767a
