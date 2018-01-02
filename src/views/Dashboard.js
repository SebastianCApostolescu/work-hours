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
import { loginAction, logoutAction } from '../actions/authActions'

import { auth, provider, db } from '../firebase'

const Dashboard = ({ user }) => {
  // const items = db.ref(`users/${user.uid}/items`)
  return (
    <div>
      <div>
        <div>
          Inicio del Turno: <DatePicker hintText="Portrait Dialog" />
          <TimePicker format="24hr" hintText="24hr Format" />
        </div>
        <div>
          Fin del Turno: <DatePicker hintText="Portrait Dialog" />
          <TimePicker format="24hr" hintText="24hr Format" />
        </div>
      </div>
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn>Christopher Nolan</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
