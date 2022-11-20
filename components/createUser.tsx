import { useState } from "react"
import { createUser } from "../fetchers/createUser"
import { Header } from "../components/header";

export function CreateUser()
{

    const [billing, setBilling] = useState("")
    const [mailing, setMailing] = useState("")
    const [payment, setPayment] = useState("")
    const [name, setName] = useState("")



    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const success = await createUser(billing, mailing, name, payment)

        if(success)
        {
            alert("Created user successfully")
        } else 
        {
            alert("Failed to create user")
        }
    }
        
    return(
        <div className="bg-gray-900 pl-4">
            <Header/>
            <div className= "text-xl pt-60 pr-80 pl-80 h-screen bg-gray-900">
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-4">
                        <label className="block text-white text-lg font-bold mb-2">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="text" 
                        placeholder="Name" value={name} onChange={(ev: any) => {setName(ev.target.value)}} ></input>
                    </div>


                    <div className="mb-4">
                        <label className="block text-white text-lg font-bold mb-2">
                            Billing Address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="text" 
                        placeholder="Billing Address (Leave blank if same as mailing)" value={billing} onChange={(ev: any) => {setBilling(ev.target.value)}} ></input>
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-lg font-bold mb-2">
                            Mailing Address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="text" 
                        placeholder="Mailing Address" value={mailing} onChange={(ev: any) => {setMailing(ev.target.value)}} ></input>
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-lg font-bold mb-2">
                            Payment Method
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="text" 
                        placeholder="Cash, card, or check" value={payment} onChange={(ev: any) => {setPayment(ev.target.value)}} ></input>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Create Account 
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )

}