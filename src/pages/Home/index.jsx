import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.apresentacao}> 
                <p>
                    Olá, eu sou o<br/>
                    <span>Rafael Debussi</span> <br />
                    <p className={styles.dev}>Desenvolvedor Full Stack</p>
                </p>
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                    Saiba Mais
                </Link>
                </div>
                <figure>
                    <img className={styles.img_home} src="/dev-red2.svg" alt="home image" />
                </figure>
            </section>
        </>
    )
}

export default Home