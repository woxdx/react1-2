import { useState, useEffect } from "react";
import useCounter from "../chapter_07/useCounter";

const MAX_CAPACITY = 10

export default function Accommodate (props) {
    const [isFull, setIsFull] = useState(false)
    const [count, increaseCount, decreaseCount] = useCounter(0)

    useEffect(() => {
        console.log("=====================")
        console.log("useEffect() is called.")
        console.log(`isFull: ${isFull}`)
    })

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY)
        console.log(`Current count value: ${count}`)
    }, [count])

    return (
        <div>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color: 'red'}}>정원이 가득 찼습니다</p>}
        </div>
    )
}