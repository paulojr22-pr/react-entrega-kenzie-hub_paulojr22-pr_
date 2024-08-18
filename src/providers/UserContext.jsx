import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
    const [userState, setUserState] = useState(null)
    const [user, setUser] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@TOKEN")
            if (token) {
                try {
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUserState(data)
                    setUser(true)
                } catch (error) {
                    localStorage.removeItem("@TOKEN")
                }
            } else {
                setUser(false)
            }
        }
        loadUser()
    }, [])

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData)
            localStorage.setItem("@TOKEN", data.token)
            navigate("/dashboard")
            setUserState(data.user)
            setUser(true)

        } catch (error) {
            setErrorMessage("Email ou senha inválidos")

        }
    }

    const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        setUserState(null)
        navigate("/")
    }

    const userRegister = async (formData) => {
        try {
            const { data } = await api.post("/users", formData)
            toast.success("Conta criada com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            setTimeout(() => {
                navigate("/") 
            }, 2000);
            
        } catch (error) {
            const { data } = error.response
            toast.error("Ops, algo deu errado", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

            if (data.message === "Email already exists") {
                setErrorMessage("Email já cadastrado!")

            }
        }
    }

    return (
        <UserContext.Provider value={{ userLogin, userRegister, userLogout, userState, errorMessage, user }}>
            {children}
        </UserContext.Provider>
    )
}

