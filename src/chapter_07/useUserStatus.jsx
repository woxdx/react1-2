import {useState, useEffect} from "react";

export default function UserStatus (userId) {
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        function handleStatusChange(status) {
            setIsStatus(status.isOnline)
        }
        ServerAPI.subscribeUserStatus(user.id, handleStatusChange)
        return () => {
            ServerAPI.unsubscribeUserStatus(user.id, handleStatusChange)
        }
    })
    return isOnline
}