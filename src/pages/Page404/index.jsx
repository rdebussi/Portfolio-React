import styles from "./Page404.module.css"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"

function Page404() {
    return (
        <>
            <Header />
            <Container>
                <div className={styles.textos}>
                    <span className={styles.texto_grande}>404</span> <br />
                    <strong className={styles.texto_red}>Página não encontrada</strong>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Page404