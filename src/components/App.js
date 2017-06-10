import React, { Component } from 'react';
import ProgramLangs from './ProgramLangs'
import LangsCount from './LangsCount'
import InputNewLang from './InputNewLang'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProgramLangs />
        <LangsCount />
        <InputNewLang />
      </div>
    );
  }
}

export default App;
