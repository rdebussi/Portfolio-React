import styles from './Sobre.module.css'
import avatar from './images/profile.jpeg'
import js from './images/js.svg'
import react from './images/react.svg'
import node from './images/node.svg'
import mysql from './images/mysql.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={avatar} alt="" className={styles.avatar}/>
                <div className={styles.text}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Rafael Debussi</span> <br />
                    <strong>Desenvolvedor Full Stack</strong></p>
                    <p>Estudante de Ciência da computação na UFJF</p>
                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br/>
                    com foco na experiência do usuário.
                    </p>
                </div>
            </div>
            <div className={styles.techs}>
                <h3>tecnologias que uso</h3>
                <div className={styles.icons}>
                    <img src={js} alt="" />
                    <img src={react} alt="" />
                    <img src={node} alt="" />
                    <img src={mysql} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Sobre