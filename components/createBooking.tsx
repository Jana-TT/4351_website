import { useEffect, useState } from "react";
import { createBooking } from "../fetchers/createBooking";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { GetNumBookings } from "../fetchers/getNumBookings";

import Link from "next/link";
import styles from '../styles/Home.module.css'

export function CreateBooking()
{
    const [date, changeDate] = useState(new Date())
    const [guestCount, changeGuestCount] = useState(1)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleChangeGuestCount = (event: any) => {
        changeGuestCount(event.target.valueAsNumber);
    };

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event: any) => {
        setPhone(event.target.value.toString());
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    }

    useEffect(() => {
        setName(localStorage.getItem("name") || "")
    }, [])

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const needPopUp = await GetNumBookings(date);

        let okToBook = true;

        if(needPopUp > 15){
            okToBook = confirm("We will charge $10 for a no show on this day due to a surge in bookings")
        }

        if(!okToBook) return;

        const success = await createBooking({ time: date.toISOString(), guests: guestCount, name: name, phone: phone, email: email })
        

        if(success)
        {
            alert("Created booking successfully")
        }
        else 
        {
            alert("Failed to create booking")
        }
    }
    return(
        <div className= "text-xl pt-60 pr-80 pl-80 h-screen bg-gray-900">
            <form onSubmit={handleSubmit}>
                <div className="font-bold text-xl absolute left-20 w-80 pt-20">
                    Note:
                    <div className="font-normal pt-2">
                        You do not need to be registered to make a reservation, but it is recommended to sign up! Registered members recieve points and rewards!
                        <svg className="w-80 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                        <div className={styles.grid}>
                        <Link href="/createAccount" >
                            <a className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-lg text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                                <h2>Click Here to Sign Up &rarr;</h2>
                            </a>
                        </Link>
                        </div>
                    </div>
                </div>
        
                <div className="pr-10 px-80">

                
                <div className="mb-4">
                    <label className="block text-white text-lg font-bold mb-2">
                        Date
                    </label>
                    <DatePicker onChange={(date) => changeDate(date || new Date())} selected={date} showTimeSelect />
                </div>


                <div className="mb-4">
                    <label className="block text-white text-lg font-bold mb-2">
                        Guest Count
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="number" 
                    placeholder="# of Guests" value={guestCount} onChange={handleChangeGuestCount} ></input>
                </div>

                <div className="mb-4">
                    <label className="block text-white text-lg font-bold mb-2">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="text" 
                    placeholder="first and last name" value={name} onChange={handleNameChange} ></input>
                </div>

                <div className="mb-4">
                    <label className="block text-white text-lg font-bold mb-2">
                        Phone Number
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="number" 
                    placeholder="phone number" value={phone} onChange={handlePhoneChange} ></input>
                </div>

                <div className="mb-4">
                    <label className="block text-white text-lg font-bold mb-2">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="text" 
                    placeholder="email" value={email} onChange={handleEmailChange} ></input>
                </div>

                <div className="flex items-center justify-between pt-4">
                    <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                        Make Reservation
                    </button>
                    
                </div>
            </div>
            </form>
        </div>


    )

}