import { useState } from "react"
import { setPoints } from "../fetchers/setPoints"

export function SetPoints()
{
    const [id, setId] = useState("")
    const [points, setPts] = useState("")

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        console.log(points)

        const success = await setPoints(id, points)

        if(success)
        {
            alert("Set points successfully")
        }
        else
        {
            alert("Failed to set points")
        }
    }

    return(
        <div className= "text-xl pt-80 pr-80 pl-80 bg-gray-900 h-screen">
            <form onSubmit={handleSubmit}>
                
                <div className="mb-4">
                    <label className="block text-white text-lg font-bold mb-2">
                        ID
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="text" 
                    placeholder="ID" value={id} onChange={(ev: any) => {setId(ev.target.value)}} ></input>
                </div>


                <div className="mb-4">
                    <label className="block text-white text-lg font-bold mb-2">
                        Points
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="number" 
                    placeholder="points" value={points} onChange={(ev: any) => {setPts(ev.target.value)}} ></input>
                </div>

                <div className="flex items-center justify-between pt-4">
                    <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                        Set Points
                    </button>
                </div>

            </form>
        </div>
    )

}
