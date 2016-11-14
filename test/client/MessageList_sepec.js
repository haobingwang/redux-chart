import React from "react"
import ReactDOM from "react-dom"
import { fromJS, Map, List } from "immutable"
import { expect } from "chai"

import MessageList from "../../src/client/components/MessageList"

// 引入测试工具
import TestUtil,{
  Simulate,
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedDOMComponentsWithClass
} from "react-addons-test-utils"

describe('MessageList',()=>{
  it('render messages and my messages',()=>{
    const messages = fromJS([
      {user:'haobing',content:'hello',time:'23:33'},
      {user:'terry',content:'world',time:'23:35'},
    ])
    const component = renderIntoDocument(
      <MessageList username="haobing" messages={messages} />
    )
    const $messages = scryRenderedDOMComponentsWithTag(component,'li')
    const $myMessages = scryRenderedDOMComponentsWithClass(component,'message-self')

    expect($messages.length).to.equal(2)
    expect($myMessages.length).to.equal(1)
  })

  it('render empty messages',()=>{
    const messages = fromJS([])
    const component = renderIntoDocument(
      <MessageList username="haobing" messages={messages} />
    )
    const $messages = scryRenderedDOMComponentsWithTag(component,'li')
    expect($messages.length).to.equal(0)
  })
})
