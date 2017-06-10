import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import uuid from 'uuid/v1'
import appReducer from './reducers/appReducer'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const pLangNames = ['JavaScript', 'Java', 'Ruby']
const preloadedState = {
  pLangs: pLangNames.reduce((accumulator, cValue) => {
    accumulator[uuid()] = {
      name: cValue,
      count: 0
    }
    return accumulator
  }, {})
}

const store = createStore(appReducer, preloadedState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
