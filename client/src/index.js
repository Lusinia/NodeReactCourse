import 'materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import App from './components/App';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
// (reducer, initial state, middleware)

ReactDom.render(
   <Provider store={store}><App /></Provider>,
    document.querySelector('#root'));