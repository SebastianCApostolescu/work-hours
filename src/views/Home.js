import React, { Component } from 'react'
import Header from '../components/header'
import Main from '../components/main'

import firebase, { auth, provider } from '../firebase'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: null,
			loggedIn: false,
			loading: true
		}
	}
	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({
					user: user,
					loggedIn: true,
					loading: false
				})
			} else {
				this.setState({
					user: null,
					loggedIn: false,
					loading: false
				})
			}
		})
	}
	login = () => {
		console.log('login')
		auth.signInWithPopup(provider).then(result => {
			const user = result.user
			console.log(user)
			this.setState({
				user: user,
				loggedIn: true
			})
		})
	}

	logout = () => {
		console.log('logout')
		auth.signOut().then(() => {
			this.setState({
				user: null,
				loggedIn: false
			})
		})
	}

	render() {
		if (this.state.loading === true) {
			return <div>Loading...</div>
		}
		return (
			<div className="App">
				<Header
					text={
						!this.state.user
							? 'Please Login Stranger'
							: `Welcome ${this.state.user.displayName}`
					}
					loggedIn={this.state.loggedIn}
					handleLogin={this.login}
					handleLogout={this.logout}
				/>
				<Main
					loggedIn={this.state.loggedIn}
					handleLogin={this.login}
					handleLogout={this.logout}
				/>
			</div>
		)
	}
}

export default Home
