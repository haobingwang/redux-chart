import { socket } from './io.js'

socket.on('state',state => {
  console.log('getInitialState:',state)
})

import React, { Component } from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { fromJS, Map, List } from "immutable"

const fakeState = {
  rooms: fromJS([
    {id:'0',name:'room',owner:'haobing'},
    {id:'1',name:'room2',owner:'terry'}
  ]),
  currentRoom: '1',
  username: 'haobing',
  messages: fromJS({
    '1': [
      {user:'haobing',content:'react is cool',time:'23:33'},
      {user:'terry',content:'so is Redux',time:'23:35'}
    ]
  })
}

var $app = document.getElementById('app')

function render() {
  ReactDOM.render(
    <App rooms={fakeState.rooms}
      currentRoom={fakeState.currentRoom}
      username={fakeState.username}
      messages={fakeState.messages}
    />,$app
  )
}

render()
