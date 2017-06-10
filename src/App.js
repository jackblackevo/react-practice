import React, { Component } from 'react';
import uuid from 'uuid/v1'
import ProgramLangs from './ProgramLangs'
import LangsCount from './LangsCount'
import InputNewLang from './InputNewLang'

class App extends Component {
  constructor(props) {
    super(props)
    
    const pLangNames = ['JavaScript', 'Java', 'Ruby']

    this.state = {
      pLangs: pLangNames.reduce((accumulator, cValue) => {
        accumulator[uuid()] = {name: cValue, count: 0}
        return accumulator
      }, {})
    }
  }

  updateCount(pLangUUID) {
    const updatedPLang = Object.assign({}, this.state.pLangs[pLangUUID], {
        count: ++this.state.pLangs[pLangUUID].count
      })
    const updatedPLangs = Object.assign({},
      this.state.pLangs, {
        [pLangUUID]: updatedPLang
      })
    this.setState({pLangs: updatedPLangs})
  }

  addLang(pLangName) {
    const updatedPLangs = Object.assign({},
      this.state.pLangs, {
        [uuid()]: {
          name: pLangName,
          count: 0
        }
      })
    this.setState({pLangs: updatedPLangs})
  }

  render() {
    return (
      <div className="App">
        <ProgramLangs pLangs={this.state.pLangs} updateCount={pLangUUID => this.updateCount(pLangUUID)}/>
        <LangsCount pLangs={this.state.pLangs} />
        <InputNewLang addLang={pLangName => this.addLang(pLangName)} />
      </div>
    );
  }
}

export default App;
