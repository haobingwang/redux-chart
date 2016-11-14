import { socket } from './io.js'

import React, { Component } from "react"
import ReactDOM from "react-dom"
import { ConnectedApp } from "./components/App"
import { fromJS, Map, List } from "immutable"

import { Provider } from "react-redux"

import { createStore } from "redux"
import rootReducer from "./reducer"
import { setState, newMessage } from "./actionCreator"
import { getInitialState, saveToStorage } from "./store"

const store = createStore(rootReducer,getInitialState())

socket.on('state',state => {
  store.dispatch(setState(state))
})

socket.on('message',message => {
  console.log('get message from server')
  store.dispatch(newMessage(message,true))
})

// const fakeState = {
//   rooms: fromJS([
//     {id:'0',name:'room',owner:'haobing'},
//     {id:'1',name:'room2',owner:'terry'}
//   ]),
//   currentRoom: '1',
//   username: 'haobing',
//   messages: fromJS({
//     '1': [
//       {user:'haobing',content:'react is cool',time:'23:33'},
//       {user:'terry',content:'so is Redux',time:'23:35'}
//     ]
//   })
// }

var $app = document.getElementById('app')

function render() {
  const fakeState = store.getState()
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>,
    $app
  )
}

// 当 store 发生改变时就会重新运行 render
// store.subscribe(render)

render()

store.subscribe(()=>{
  saveToStorage(store.getState())
})
