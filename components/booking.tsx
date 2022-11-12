
export function Booking(props: {time: string, guests: number, name: string, phone: number, number: number, email: string })
{
    return <tr>
        <td className="text-center">{ props.number }</td>
        <td>{new Date(props.time).toLocaleDateString()}</td>
        <td className="text-center">{props.guests}</td>
        <td className="text-center">{props.name}</td>
        <td className="text-center">{props.phone}</td>
        <td className="text-center">{props.email}</td>
    </tr>
}