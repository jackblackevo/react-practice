import React, { Component } from 'react';
import uuid from 'uuid/v1'
import ProgramLangs from './ProgramLangs'
import LangsCount from './LangsCount'

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

  render() {
    return (
      <div className="App">
        <ProgramLangs pLangs={this.state.pLangs} updateCount={pLangUUID => this.updateCount(pLangUUID)}/>
        <LangsCount pLangs={this.state.pLangs} />
      </div>
    );
  }
}

export default App;
