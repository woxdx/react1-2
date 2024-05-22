import { useState, useEffect } from "react";
import useUserStatus from "./useUserStatus";

export default function UserListItem (props) {
    const isOnline = useUserStatus(props.user.id)
    
    return(
        <li style={{ color: isOnline ? 'green' : 'black'}}>
            {props.user.name}
        </li>
    )
}