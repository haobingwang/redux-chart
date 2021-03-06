import { expect } from "chai"
import {formJS,Map,List} from "immutable"
import {v1} from "uuid"

import coreReducer from "../../src/server/reducer"
import {addRoom,removeRoom} from "../../src/server/actionCreator.js"

describe("server核心Reducer",()=>{
  it("可以当做一个reducer",()=>{
    var id = v1()
    var actions = [
      {type:"ADD_ROOM",room:{id,name:"1",owner:"haobing"}},
      {type:"ADD_ROOM",room:{name:"2",owner:"terry"}},
      {type:"ADD_ROOM",room:{name:"3",owner:"haobing"}},
      {type:"REMOVE_ROOM",payload:{id:id,user:"haobing"}},
    ]
    const finalState = actions.reduce( coreReducer, undefined )
    // console.log(finalState)
    expect(finalState.get("rooms").size).to.equal(2)
    expect(finalState.getIn(["rooms",0,"owner"])).to.equal("terry")
  })

  it("使用actionCreator",()=>{
    var id = v1()
    var actions = [
      addRoom({id,name:"1",owner:"haobing"}),
      addRoom({name:"2",owner:"terry"}),
      addRoom({name:"3",owner:"haobing"}),
      removeRoom({id:id,user:"haobing"}),
    ]

    const finalState = actions.reduce( coreReducer, undefined )
    // console.log(finalState)
    expect(finalState.get("rooms").size).to.equal(2)
    expect(finalState.getIn(["rooms",0,"owner"])).to.equal("terry")
  })
})
