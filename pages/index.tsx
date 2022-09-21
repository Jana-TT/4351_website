import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { CreateBooking } from '../components/createBooking'
import { CreateUser } from '../components/createUser'
import { GetBookings } from '../components/getBooking'
import { SetPoints } from '../components/setPoints'
import { DisplayUser } from '../components/displayUser'
import { LogOut } from '../components/logout'
import Link from "next/link"


export default function Home() {
  return (

    <div className="h-screen bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-800">
      <div className='absolute top-4'>
        <DisplayUser/>
      </div>

      <div className="absolute h-32 w-32 my-4 mr-4">
          <LogOut/>
      </div>

    <div className="md:w-8/12 bg-gray-800">

      <main className={styles.main}>
        <h1 className={styles.title}>
          OpenTable
        </h1>

        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>

        <div className={styles.grid}>
          <Link href="/reservation" >
            <a className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-lg text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline mt-10">
            <h2>Make a Reservation &rarr;</h2>
            </a>
          </Link>

          <Link href="/createAccount" >
            <a className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-lg text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline mx-5 mt-10">
            <h2>Create Account &rarr;</h2>
            </a>
          </Link>

          <Link href="/adminPage" >
            <a className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-lg text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline mt-10">
            <h2>Admin &rarr;</h2>
            </a>
          </Link>

        </div>
      </main>
    </div>
    </div>
  )
}
