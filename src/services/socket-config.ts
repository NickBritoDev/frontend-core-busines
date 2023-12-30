import io from 'socket.io-client'
const baseURL = import.meta.env.VITE_BASE_URL;


const socket = io(baseURL, {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000
})

export default socket
