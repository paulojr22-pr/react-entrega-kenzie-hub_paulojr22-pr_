import { useNavigate } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.scss"

export const Register = () => {

    const navigate = useNavigate()

    return (

        <section className="centerPage">
            <div className={styles.titleDiv}>

                <h1 className="title lg highlight center bold">Kenzie Hub</h1>
                <button onClick={() => navigate("/")}>Voltar</button>

            </div>
            <ToastContainer />
            <RegisterForm />
        </section>
        
    )
}