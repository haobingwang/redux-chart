import React from "react"
import ReactDOM from "react-dom"
import { fromJS, Map, List } from "immutable"
import { expect } from "chai"

import InputBox from "../../src/client/components/InputBox"

// 引入测试工具
import TestUtil,{
  Simulate,
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithClass
} from "react-addons-test-utils"

describe('InputBox',()=>{
  it('发送消息',()=>{
    var message

    function sendMessage(msg) {
      message = msg
    }

    const instance = renderIntoDocument(
      <InputBox sendMessage={sendMessage} />
    )

    const $textarea = findRenderedDOMComponentWithTag(instance,'textarea')
    expect($textarea).to.be.ok
    // set value of textarea
    $textarea.value = 'hello'
    const $form = findRenderedDOMComponentWithTag(instance,'form')
    Simulate.submit($form)

    expect(message).to.equal('hello')
  })
})
