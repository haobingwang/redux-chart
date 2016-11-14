import React from "react"
import ReactDOM from "react-dom"
import { fromJS, Map, List } from "immutable"
import { expect } from "chai"

import Message from "../../src/client/components/Message"

// 引入测试工具
import TestUtil,{
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedDOMComponentsWithClass
} from "react-addons-test-utils"

describe('Message',()=>{
  it('render message',()=>{
    const message = fromJS(
      {user:'haobing',content:'hello',time:'23:33'}
    )
    const component = renderIntoDocument(
      <Message isSelf={true} message={message} />
    )
    const $time = scryRenderedDOMComponentsWithTag(component,'small')
    // console.log($time.html())
    // expect($time.).to.equal('<small>23:33</small>')
  })
})
