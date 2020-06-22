import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import MyApp from './components/MyApp'
import * as serviceWorker from './serviceWorker'
import {Provide,store} from './store/index'
import RouterMap from './router/index'

import {EventEmitter} from 'events'
Component.prototype.$bus = new EventEmitter()

ReactDOM.render(
  <Provide store={store}>
  	<RouterMap />
  </Provide>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
