import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetConversations = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])
  const apiUrl = import.meta.env.VITE_SERVER;


  useEffect(() => {
    const getConversations = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem("Token");

        // Check if token exists
        if (!token) {
          throw new Error("No authentication token found");
        }

        // Make the API request with Authorization header
        const res = await fetch(`${apiUrl}/api/users`, {
          headers: {
            Authorization: `${token}`, // Add the token here
            "Content-Type": "application/json",
          },
        });

        const data = await res.json()

        if (data.error) {
          throw new Error(data.error)
        }

        setConversations(data)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }

    getConversations()
  }, [])

  return { loading, conversations }
}

export default useGetConversations
