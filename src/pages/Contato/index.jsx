import styles from './Contato.module.css'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaGithub, FaLinkedin  } from "react-icons/fa";



function Contato() {
    return (
        <>
                <section className={styles.contatos}>
                    <figure className={styles.photo}>
                        <img src="/dev_focus3.svg" alt="" />
                    </figure>
                    <h2>Entre em contato</h2>
                    <div className={styles.icones}>
                        <a href="mailto:rafaeldebussi@gmail.com"
                        target="_blank" rel="noopener noreferrer">
                            <MdEmail className={styles.icone} />
                        </a>
                        <a href="mailto:rafaeldebussi@gmail.com"
                        target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className={styles.icone}/>
                        </a>
                        <a href="mailto:rafaeldebussi@gmail.com"
                        target="_blank" rel="noopener noreferrer">
                            <FaGithub className={styles.icone}/>
                        </a>
                        <a href="mailto:rafaeldebussi@gmail.com"
                        target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={styles.icone}/>
                        </a>
                        
                        
                    </div>
                </section>
        </>
    )
}

export default Contato