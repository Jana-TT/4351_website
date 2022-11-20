import Link from "next/link";
import { GetBookings } from "../components/getBooking";
import { Header } from "../components/header";
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

        <Header/>
        
    </div>
    )
}