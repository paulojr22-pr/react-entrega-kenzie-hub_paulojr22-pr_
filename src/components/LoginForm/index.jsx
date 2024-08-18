import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./loginSchema"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)

    })

    const { userLogin, errorMessage } = useContext(UserContext)

    const submit = (formData) => {
        userLogin(formData)
        
    }

    const navigate = useNavigate()

    return (
        <div className="formDiv">
            <h1 className="title md center">Login</h1>
            <form onSubmit={handleSubmit(submit)}>

                <Input
                    label="Email"
                    type="email"
                    placeholder="Digite seu email aqui"
                    {...register("email")}
                    error={errors.email}
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="Digite sua senha aqui"
                    {...register("password")}
                    error={errors.password}
                />

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <button className="formButton btnPink" type="submit" >Enviar</button>
            </form>

            <p className="headline center gray">Ainda não possui uma conta?</p>
            <button className="formButton btnGray" onClick={() => navigate("/register")}>Cadastre-se</button>
        </div>

    )
}