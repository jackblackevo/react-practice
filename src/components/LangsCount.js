import React, {Component} from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid/v1'

class LangsCount extends Component {
  isShowComma(index) {
    const lastIndex = Object.keys(this.props.pLangs).length - 1

    if (index !== lastIndex) {
      return <span key={uuid()}>, </span>
    } else {
      return <span key={uuid()}></span>
    }
  }

  showLangsCount() {
    const pLangs = this.props.pLangs

    return Object.keys(pLangs).map((pLangUUID, index) => {
      return (
        <span key={uuid()}>{pLangs[pLangUUID].name}: {pLangs[pLangUUID].count}{this.isShowComma(index)}</span>
      )
    })
  }

  render() {
    return <div>{this.showLangsCount()}</div>
  }
}

const mapStateToProps = ({pLangs}) => ({
  pLangs
})

LangsCount = connect(mapStateToProps, null)(LangsCount)

export default LangsCount