import React, { useContext, useEffect, useState } from "react"
import { createContext } from "react"
import { useAuthContext } from "./AuthContext"
import { io } from "socket.io-client"

export const SocketContext = createContext()

export const useSocketContext = () => {
  return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const { authUser } = useAuthContext()

  const apiUrl = import.meta.env.VITE_SERVER;
  console.log(apiUrl)


  useEffect(() => {
    if (authUser) {
      const socket = io(`${apiUrl}`, {
        query: {
          userId: authUser._id,
        },
      })

      setSocket(socket)

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users)
      })

      return () => socket.close()
    } else {
      if (socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, [authUser])

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketContext
