import { useEffect, useState } from "react";
import { getUser, User } from "../fetchers/getUser";
import { DisplayableUser } from "./user";


export function DisplayUser()
{
    const [user, setUser] = useState(User)
    const [inputMailing, setInputMailing] = useState("");

    useEffect(() => {
        setTheUser()
    }, [])


    const setTheUser = async () => {
        setUser((await getUser()));
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        localStorage.setItem("mailing", inputMailing);

        setTheUser();
    }


    return <>{
        user ? <DisplayableUser {...user}/> :
        <form onSubmit={handleSubmit}>
            <input className="px-1 mx-8 rounded"
                type="text"
                placeholder="mailing address"
                value={inputMailing}
                onChange={(ev: any) => {setInputMailing(ev.target.value)}}
            />
            <button className="px-1 border rounded pl-1 pr-1" type="submit">
                Login
            </button>
        </form>
    }</>
}