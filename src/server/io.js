const DEFAULT_ROOM = '0'

export default function listenWebSocket(io,store) {
  io.on('connection',socket=>{
    console.log('a client connected')

    // 发送 state 到客户端
    socket.emit('state',store.getState())
    // add/remove room logic goes here

    socket.on('action',action=>{
      console.log('get a client action:',action)
    })

    socket.on('disconnect',()=>{
      console.log('a client disconnected')
    })
  })
}
