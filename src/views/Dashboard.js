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

//import { db } from '../db'

import { connect } from 'react-redux'
import { loginAction, logoutAction } from '../actions/authActions'
import { addHourAction } from '../actions/updateHoursActions'

import { auth, provider, db } from '../firebase'

// const dbs = [
//   {
//     '20180101': {
//       startDay: '01',
//       startMonth: '01',
//       startYear: '2018',
//       startHour: '12:00',
//       endDay: '01',
//       endMonth: '01',
//       endYear: '2018',
//       endHour: '23:00'
//     }
//   },
//   {
//     '20180102': {
//       startDay: '02',
//       startMonth: '01',
//       startYear: '2018',
//       startHour: '12:00',
//       endDay: '03',
//       endMonth: '01',
//       endYear: '2018',
//       endHour: '01:00'
//     }
//   }
// ]

const dbs = [
  {
    id: '20180101',
    startDay: '01',
    startMonth: '01',
    startYear: '2018',
    startHour: '12:00',
    endDay: '01',
    endMonth: '01',
    endYear: '2018',
    endHour: '23:00'
  },
  {
    id: '20180102',
    startDay: '02',
    startMonth: '01',
    startYear: '2018',
    startHour: '12:00',
    endDay: '03',
    endMonth: '01',
    endYear: '2018',
    endHour: '01:00'
  }
]

const Dashboard = ({ user }) => {
  const uid = user.uid
  const items = db
    .ref(`/users/${uid}/day1/`)
    .on('value')
    .then(snapshot => {
      console.log(snapshot.val())
    })
  console.log(items)
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
            <TableRowColumn>Employed2</TableRowColumn>
          </TableRow>
          {dbs.map((data, i) => (
            <TableRow>
              <TableRowColumn>{data.id}</TableRowColumn>
              <TableRowColumn>{data.startDay}</TableRowColumn>
              <TableRowColumn>{data.startHour}</TableRowColumn>
              <TableRowColumn>{data.endHour}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    user: state.auth.user,
    authed: state.auth.authed,
    loading: state.auth.loading,
    hours: state.updateHours.hours
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
    addHour: hour => {
      dispatch(addHourAction(hour))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
