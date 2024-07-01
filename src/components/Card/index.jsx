import styles from './Card.module.css'
import fox_page from '/fox_page.png'
import { FaReact, FaHtml5, FaCss3Alt  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";



function Card () {
    return (
        <section className={styles.card}>
            <img className={styles.card_page} src={fox_page} alt="" />
            <h2>Fox Films</h2>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5/>
                    <FaCss3Alt/>
                    <IoLogoJavascript/>
                    <FaReact/>
                </div>
                <button className={styles.card_button}>
                    <FaArrowRight/>
                </button>
            </div>
        </section>
    )
}

export default Card