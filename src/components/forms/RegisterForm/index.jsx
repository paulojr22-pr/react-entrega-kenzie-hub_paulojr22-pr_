import styles from './styles.module.css'
import { Input } from "../Input";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (event) => {

        // event.preventDefault();

        console.log(event);
    };

    console.log(handleSubmit);

    return (

        <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>

            <Input 
                label="Usuário" 
                type="text" 
                placeholder='Digite seu nome de usuário' 
                required
                {...register("username")}
            />

            <Input 
                label="Número favorito" 
                type="number" 
                placeholder="Digite seu número favorito entre 1 e 100:" 
                min="1"
                max="100" 
                required
                {...register("favNumber")}
            />

            <Input 
                label="E-mail" 
                type="email" 
                placeholder="Digite seu E-mail:"
                required
                {...register("email")} 

            />

            
            <Input 
                label="Password" 
                type="password" 
                placeholder="Digite seu password:" 
                required
                {...register("password")}

            />

            <Input 
                label="Confirmar Password" 
                type="password" 
                placeholder="Confirme seu password:" 
                required
                {...register("confirmPassword")}

            />

            <button>Criar conta</button>
        
        </form>
    )

}

/*
Versão 1 (chumbada)
export const RegisterForm = () => {

    return (

        <form className={styles.registerForm}>

            <div className={styles.inputBox}>   
                <label htmlFor="username">Usuario</label>
                <input 
                name="username"
                type="text" 
                placeholder="Digite seu nome de Usuário:"
            />
            </div>
         
            <div className={styles.inputBox}>   
                <label htmlFor="favNumber">Usuario</label>
                <input 
                name="favNumber"
                type="number" 
                placeholder="Digite seu número favorito entre 1 e 100:" 
                min="1"
                max="100"      
            />        
            </div>

            <div className={styles.inputBox}>   
                <label htmlFor="email">E-Mail</label>
                <input 
                name="email"
                type="email" 
                placeholder="Digite seu E-Mail:"   
            />        
            </div>

            <div className={styles.inputBox}>   
                <label htmlFor="password">Password</label>
                <input 
                name="password"
                type="password" 
                placeholder="Digite seu password:"   
            />        
            </div>

            <button>Criar conta</button>
        
        </form>
    )

}*/