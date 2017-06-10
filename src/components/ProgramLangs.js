import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateCount, deleteLang} from '../actions/appAction'

class ProgramLangs extends Component {
  showLangList() {
    const pLangs = this.props.pLangs
    return Object.keys(pLangs).map(pLangUUID => {
      return (
        <li key={pLangUUID}><span onClick={event => this.props.updateCount(pLangUUID)}>{pLangs[pLangUUID].name}</span><button onClick={event => this.props.deleteLang(pLangUUID)}>Delete</button></li>
      )
    })
  }

  render() {
    return (
      <ul>
        {this.showLangList()}
      </ul>
    )
  }
}

const mapStateToProps = ({pLangs}) => ({
  pLangs
})

const mapDispatchToProps = dispatch => ({
  updateCount: pLangUUID => dispatch(updateCount(pLangUUID)),
  deleteLang: pLangUUID => dispatch(deleteLang(pLangUUID))
})

ProgramLangs = connect(mapStateToProps, mapDispatchToProps)(ProgramLangs)

export default ProgramLangs