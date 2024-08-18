import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import styles from './styles.module.scss'


export const Dashboad = () => {
    const { userState, userLogout } = useContext(UserContext)
    return (
        <>
            <main>
                <section>
                    <div className={`${styles.flex} container`}>
                        <h1 className="title lg highlight bold">Kenzie Hub</h1>
                        <button onClick={() => userLogout()}>Sair</button>
                    </div>
                    
                    <div className={styles.border}></div>

                    <div className={`${styles.flex} container`}>
                        <h1 className="title md bold">Olá, {userState?.name}</h1>
                        <p className="headline gray">{userState?.course_module}</p>
                    </div>

                    <div className={styles.border}></div>

                    <div className={`${styles.flex2} container`}>
                        <h1 className="title md bold">Que pena! Estamos em desenvolvimento :(</h1>
                        <p className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                    </div>
                </section>
            </main>
        </>
    )
}