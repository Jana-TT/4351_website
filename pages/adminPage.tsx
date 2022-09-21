import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function AdminPage(){
    return(
    <div className="bg-gray-800 h-screen">
        <div className={styles.grid}>
            <Link href="/reservationTable" >
                <a className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-lg text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline mt-10">
                <h2>Reservations &rarr;</h2>
                </a>
            </Link>

            <Link href="/points" >
                <a className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-lg text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline mt-10 mx-5">
                <h2>Points &rarr;</h2>
                </a>
            </Link>
        </div>
    </div>
    )
}