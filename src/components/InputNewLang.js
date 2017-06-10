import React, {Component} from 'react'

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

export default InputNewLang