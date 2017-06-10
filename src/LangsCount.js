import React, {Component} from 'react'

class LangsCount extends Component {
  isShowComma(index) {
    const lastIndex = Object.keys(this.props.pLangs).length - 1

    if (index !== lastIndex) {
      return <span>, </span>
    } else {
      return <span></span>
    }
  }

  showLangsCount() {
    const pLangs = this.props.pLangs

    return Object.keys(pLangs).map((pLangUUID, index) => {
      return (
        <span>{pLangs[pLangUUID].name}: {pLangs[pLangUUID].count}{this.isShowComma(index)}</span>
      )
    })
  }

  render() {
    return <div>{this.showLangsCount()}</div>
  }
}

export default LangsCount