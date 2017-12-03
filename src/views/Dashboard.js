import React, { Component } from 'react'
import '../styles/materialize-grid.css'

class Dashboard extends Component {
	render() {
		return <div className="container">Private {this.props.test} </div>
	}
}

export default Dashboard
