import React from 'react'
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from 'material-ui/Table'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'

import { connect } from 'react-redux'
import { addHourAction, stuffAdd } from '../actions/updateHoursActions'

import { db } from '../firebase'

const Dashboard = ({ user, addHour, log, addStuff }) => {
	const uid = user.uid
	// const items = db.ref(`/users/${uid}/work-log`).on('value', snapshot => {
	// 	console.log(snapshot.val())
	// 	//addHour(snapshot.val())
	// })
	const items = db.ref(`/users/${uid}/work-log`)
	items.once('value', snapshot => {
		//console.log(snapshot.val())
		//addHour(snapshot.val())
		snapshot.forEach(childSnapshot => {
			var childKey = childSnapshot.key
			var childData = childSnapshot.val()
			console.log(log)

			if (log.length === 0) {
				addHour(childKey, childData)
			}

			for (let i = 0; i < log.length; i++) {
				const element = log[i]
				console.log('hey')
				console.log(element)
				console.log(childData)

				if (element !== childData) {
					addHour(childKey, childData)
				} else {
					break
				}
			}

			console.log(childKey)
			console.log(childData)
			//addHour(childKey, childData)
		})
	})

	return (
		<div>
			<div style={{ display: 'inline-block' }}>
				<div
					className="turn-start"
					style={{ display: 'inline-flex', alignItems: 'baseline' }}
				>
					Inicio del Turno:
					<div className="pickers" style={{ display: 'inline-flex' }}>
						<DatePicker
							style={{ margin: '0 5px 0 5px' }}
							hintText="Fecha de Inicio de Turno"
						/>
						<TimePicker format="24hr" hintText="Hora de Inicio de Turno" />
					</div>
				</div>
				<div
					className="turn-end"
					style={{ display: 'inline-flex', alignItems: 'baseline' }}
				>
					Fin del Turno:
					<div className="pickers" style={{ display: 'inline-flex' }}>
						<DatePicker
							style={{ margin: '0 5px 0 5px' }}
							hintText="Fecha de Fin de Turno"
						/>
						<TimePicker format="24hr" hintText="Hora de Fin de Turno" />
					</div>
				</div>
			</div>
			<Table selectable={false}>
				<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
					<TableRow>
						<TableHeaderColumn>ID</TableHeaderColumn>
						<TableHeaderColumn>Day</TableHeaderColumn>
						<TableHeaderColumn>Start</TableHeaderColumn>
						<TableHeaderColumn>End</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody displayRowCheckbox={false}>
					<TableRow>
						<TableRowColumn>ID</TableRowColumn>
						<TableRowColumn>John Smith</TableRowColumn>
						<TableRowColumn>Employed</TableRowColumn>
						<TableRowColumn>ss</TableRowColumn>
					</TableRow>
					{log.map((data, i) => (
						<TableRow>
							<TableRowColumn>{data.id}</TableRowColumn>
							<TableRowColumn>{data.day}</TableRowColumn>
							<TableRowColumn>{data.hora}</TableRowColumn>
							<TableRowColumn>...</TableRowColumn>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

const mapStateToProps = state => {
	console.log('state', state)
	return {
		user: state.auth.user,
		log: state.workLog.log,
		stuff: state.workLog.stuff
	}
}
const mapDispatchToProps = dispatch => {
	return {
		addHour: (key, log) => {
			dispatch(addHourAction(key, log))
		},
		addStuff: stuff => {
			dispatch(stuffAdd(stuff))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
