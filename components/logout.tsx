
export function LogOut(){
    

    const handleSubmit = async (event: any) => {

        localStorage.removeItem("mailing");

    }

    return(

        <form onSubmit={handleSubmit}>
            <button className="ml-80 rounded border pl-1 pr-1" type="submit">
                Logout
            </button>
        </form>
        
    )

}

