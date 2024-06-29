import styles from "./page.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline, IoLocation } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import HomePage from "./home/page";

export default function Home() {
    return (
        <main className={styles.main}>
            <HomePage />
        </main>
    );
}
