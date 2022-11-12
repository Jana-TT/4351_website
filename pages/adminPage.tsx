import Link from "next/link";
import { GetBookings } from "../components/getBooking";
import { SetPoints } from "../components/setPoints";
import styles from '../styles/Home.module.css'

export default function AdminPage(){
    return(
    <div className="bg-gray-800 h-screen flex">
        <div className="w-1/2">
            <GetBookings/>
        </div>

        <div className="w-1/2">
            <SetPoints/>
        </div>

        <div className="">
            <Link href="/home">
                <a>
                    home 
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                </a>
            </Link>
        </div>

    </div>
    )
}