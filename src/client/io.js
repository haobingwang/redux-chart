import IO from "socket.io-client"

export const socket = IO("http://localhost:3000")

socket.on('disconnet',()=>{
  console.log('user disconneted')
})
