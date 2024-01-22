import styles from "./Cardapio.module.scss"
import { Logo } from "../../components/Logo"

const Cardapio = () => {
    return (
        <main>
            <nav className={styles.menu}>
                <Logo/>
            </nav>
        </main>
    )
}

export default Cardapio;