
export function DisplayableUser(props: { billingAddress: string,  mailingAddress: string, name: string, points: string, preferredPaymentMethod: string })
{
    return <>
    <div className="mx-4 text-lg">
        {props.name}
        <br/>
        {props.points} Points
    </div>
    
    </>
    


}