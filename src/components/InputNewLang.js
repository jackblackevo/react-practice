import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addLang} from '../actions/appAction'

class InputNewLang extends Component {
  addLang() {
    const newLangName = this.refs.langInput.value.trim()
    !!newLangName && this.props.addLang(newLangName)

    this.refs.langInput.value = ''
    this.refs.langInput.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref="langInput" />
        <button onClick={event => this.addLang()}>Add</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addLang: pLangName => dispatch(addLang(pLangName))
})

InputNewLang = connect(null, mapDispatchToProps)(InputNewLang)

export default InputNewLang