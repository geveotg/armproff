import styles from "./page.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline, IoLocation } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles["container"]}>
                <h3 className={styles["title"]}>
                    <ol className={styles['title_ol']}>
                        <li >
                            Վեբ-Ծրագրավորման Դասընթացներ։
                        </li>
                        <li>
                            SMM (Դասընթացներ)
                        </li>
                        <li>
                            Բիզնես էջերի մշակում և կառավարում (SMM)
                        </li>
                        <li>
                            Վեբ-Կայքերի պատրաստում
                        </li>
                        <li>
                            Գրաֆիկ Դիզայն
                        </li>
                    </ol>
                </h3>

                <div className={styles["curses"]}>
                    <h2 className={styles["curse_items"]}>
                        <img className={styles["link_icon"]} src="/img/check.png" alt="" />
                        WEB_PROGRAMMING{" "}
                    </h2>
                    <h2 className={styles["curse_items"]}>
                        <img className={styles["link_icon"]} src="/img/check.png" alt="" />
                        GRAPHIC_DESIGN
                    </h2>
                    <h2 className={styles["curse_items"]}>
                        <img className={styles["link_icon"]} src="/img/check.png" alt="" />
                        SOCIAL MARKETING
                    </h2>
                </div>

                <div className={styles["contacts"]}>
                    <a
                        target={"_blank"}
                        href="tel:+374 55 65-63-66"
                        className={styles["contact_iteam"]}
                    >
                        <FaPhoneAlt className={styles["link_img"]} />
                        +374 55 65-63-66
                    </a>
                    <a
                        target={"_blank"}
                        href="https://www.instagram.com/armprof_it_center?igsh=dDhqcTJ3dmtnM25z"
                        className={styles["contact_iteam"]}
                    >
                        <FiInstagram className={styles["link_img"]} />
                        armprof_it_center
                    </a>
                    <a
                        target={"_blank"}
                        href="mailto:armprof2010@gmail.com"
                        className={styles["contact_iteam"]}
                    >
                        <IoMailOutline className={styles["link_img"]} />
                        armprof2010@gmail.com
                    </a>

                    <a
                        target={"_blank"}
                        href="https://www.google.com/maps/place/ArmProf/@40.1722871,44.5113188,15z/data=!4m6!3m5!1s0x406abd174e244c2d:0xb391ef84a1206aef!8m2!3d40.1722871!4d44.5113188!16s%2Fg%2F11hpwt__v0?entry=ttu"
                        className={styles["contact_iteam"]}
                    >
                        <IoLocation className={styles["link_img"]} />
                        Արշակունյաց 2
                    </a>
                </div>
            </div>

            <div className={styles["staff"]}>
                <img src="/img/logo.png" alt="" className={styles["logo_img"]} />
                <div className={styles["personal_container"]}>
                    <img
                        src="/staff/Arman.jpeg"
                        alt=""
                        className={`${styles["personal_img"]} ${styles["arman"]}`}
                    />
                    <img src="/staff/Narine.jpeg" alt="" className={styles["personal_img"]} />
                    <img
                        src="/staff/Gevorg.jpg"
                        alt=""
                        className={`${styles["personal_img"]} ${styles["gevorg"]}`}
                    />
                </div>
            </div>
        </main>
    );
}
