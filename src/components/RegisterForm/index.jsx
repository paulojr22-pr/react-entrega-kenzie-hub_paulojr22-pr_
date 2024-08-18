import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { Select } from "../Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "./registerSchema"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    })

    const { userRegister, errorMessage } = useContext(UserContext)
    
    const submit = (formData) => {
        userRegister(formData)
    }

    return (
        <div className="formDiv">
            <h1 className="title md">Crie sua conta</h1>
            <p className="headline center gray">Rápido e gratis, vamos nessa</p>

            <form onSubmit={handleSubmit(submit)}>
                <Input
                    label="Nome"
                    type="text"
                    placeholder="Digite seu nome aqui"
                    {...register("name")}
                    error={errors.name}
                />

                <Input
                    label="Email"
                    type="email"
                    placeholder="Digite seu email aqui"
                    {...register("email")}
                    error={errors.email}
                />
                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <Input
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha aqui"
                    {...register("password")}
                    error={errors.password}
                />

                <Input
                    label="Confirmar senha"
                    type="password"
                    placeholder="Digite novamente sua senha"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword}
                />

                <Input
                    label="Bio"
                    type="text"
                    placeholder="Fale sobre você"
                    {...register("bio")}
                    error={errors.bio}
                />

                <Input
                    label="Contato"
                    type="number"
                    placeholder="Ex: (xx) x xxxx-xxxx "
                    {...register("contact")}
                    error={errors.contact}
                />

                <Select
                    values={["Selecione o seu módulo", "Primeiro módulo (Introdução ao Frontend)", "Segundo módulo (Frontend Avançado)", "Terceiro módulo (Introdução ao Backend)", "Quarto módulo (Backend Avançado)"]}
                    {...register("course_module")}
                    error={errors.course_module}
                />

                <button className="formButton btnNegative" type="submit">Cadastrar</button>
            </form>
        </div>
    )
}