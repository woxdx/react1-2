import { useState, userEffact } from "react"

export default function WithCounter(props) {
    // let count = 0
    const [count, setCount] = useState(0) // useState(초기값) 

    userEffact(() => {
        document.title = `총 ${count}번 클릭했습니다.`
    })

    const [isOnlin, setIsOnline] = useState(null)
    userEffact(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
        }
    })

    function handleStatusChange(status) {
        setIsOnline(status.isOnlin)
    }

    return (
        <>
            <p>총 {count}</p>
            <button onClick={() => setCount(count+1)}>
                클릭
            </button>
        </>
    )
}