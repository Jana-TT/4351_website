import { useEffect, useState } from "react";
import { startFetchGetBookings } from "../fetchers/getAllBookings";

import { Booking } from "./booking";



export function GetBookings()
{
    const [bookings, setBookings] = useState(new Array())

    useEffect(() => {
        var now = new Date();
        
        now.setDate(now.getDate() + 1);

        GetBookings(now);
    }, [])

    const GetBookings = async (futureDate: Date) => {

        var data = await startFetchGetBookings({ min: new Date().toISOString(), max: futureDate.toISOString()})
        
        for(let i = 0; i < data.length; i++)
        {
            data[i]["number"] = i;
        }

        setBookings(data)
    
    }


    return(
    <div className="pt-1 pl-3 h-screen bg-gray-900">
      <div className="">
      The reservation table shows the reservations at the current moment plus one day ahead: ,
      </div>
      <table className="bg-gray-800">
        <thead className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-md text-white font-bold rounded focus:outline-none focus:shadow-outline">
          <tr>
            <th scope="col" className="py-3 px-6"># </th>
            <th scope="col" className="py-3 px-6">Date </th>
            <th scope="col" className="py-3 px-6">Guests </th>
            <th scope="col" className="py-3 px-6">Name </th>
            <th scope="col" className="py-3 px-6">Phone No. </th>
            <th scope="col" className="py-3 px-6">Email </th>
          </tr>
        </thead>
      <tbody>
        {
          bookings.map((booking) => <Booking {...booking} key={booking.number}/>)
        }
      </tbody>
      </table>

      
  </div>
    )
}
