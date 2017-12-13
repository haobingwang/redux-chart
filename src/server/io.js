const DEFAULT_ROOM = '0'

export default function listenWebSocket(io,store) {
  io.on('connection',socket=>{
    console.log('a client connected')

    // 发送 state 到客户端
    socket.emit('state',store.getState())

    // add/remove room logic goes here
    socket.on('action',action=>{
      console.log('get a client action:',action)
      switch (action.type) {
        case "SWITCH_ROOM":
          return switchRoom(socket,action.roomId || DEFAULT_ROOM)
				case "NEW_MESSAGE":
          console.log(socket.rooms.length)
					if( socket.rooms && socket.rooms.length>0  ){
						socket.rooms.forEach(id=>{
							socket.to(id).emit("message", action.message)
						})
					}else{
            console.log('没有房间，发送给自己')
						socket.emit( "message", action.message )
					}
					return
      }
      store.dispatch(action)// addRoom removeRoom
      // now send back new state
			socket.emit("state", store.getState() )
			if( ["ADD_ROOM","REMOVE_ROOM"].indexOf(action.type) > -1){
				socket.broadcast.emit("state", store.getState() )
			}
      socket.emit('state',store.getState())
    })

    socket.on('disconnect',()=>{
      console.log('a client disconnected')
    })
  })
}

function switchRoom(socket,roomId){
	socket.rooms.forEach( (room,index)=>{
		console.log("should leave room, skip first one")
		if( index > 0 ){
			socket.leave( room )//这里是异步的
		}
	})

	setTimeout(()=>{
		socket.join( roomId )
		console.log( "roomId:",roomId, "socket.rooms:",socket.rooms )
	},200)
}
