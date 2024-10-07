import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const handleInputErrors = (email, password) => {
  if (!email || !password) {
    toast.error("Please fill all the fields");
    return true;
  }
  return false;
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (email, password) => {
    const checkError = handleInputErrors(email, password);

    if (checkError) {
      return;
    }


  const apiUrl = import.meta.env.VITE_SERVER;

      const res = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      console.log(data.isP)

      if(!data.isP){
        setAuthUser(data);
        localStorage.setItem("Token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Login successful!"); // Success toast

      }else{
        toast.error("Invalid email or password");
      }

   
  };

  return { loading, login };
};

export default useLogin;
