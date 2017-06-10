import React, {Component} from 'react'

class ProgramLangs extends Component {
  showLangList() {
    const pLangs = this.props.pLangs
    return Object.keys(pLangs).map(pLangUUID => {
      return <li key={pLangUUID}><span onClick={event => this.props.updateCount(pLangUUID)}>{pLangs[pLangUUID].name}</span></li>
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

export default ProgramLangs