import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'

import Home from './views/Home'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Header from './components/header'

import firebase, { auth, provider } from './firebase'

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
		auth.signInWithPopup(provider).then(result => {
			const user = result.user
			console.log(user)
			this.setState({
				user: user,
				authed: true
			})
		})
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
								text={
									!this.state.user
										? 'Please Login Stranger'
										: `Welcome ${this.state.user.displayName}`
								}
								loggedIn={this.state.authed}
								handleLogin={this.login}
								handleLogout={this.logout}
								user={this.state.user}
							/>
							<Switch>
								<Route exact path="/" component={Home} />
								<PublicRoute
									authed={this.state.authed}
									path="/login"
									component={Login}
								/>
								<PrivateRoute
									authed={this.state.authed}
									component={Dashboard}
								/>
								<Route component={() => <div>Not Found</div>} />
							</Switch>
						</div>
					</BrowserRouter>
				)}
			</MuiThemeProvider>
		)
	}
}

export default App
