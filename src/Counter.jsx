import { useState } from "react"

export default function Counter(props) {
    // let count = 0
    const [count, setCount] = useState(0) // useState(초기값) 
    
    return (
        <>
            <p>총 {count}</p>
            <button onClick={() => setCount(count+1)}>
                클릭
            </button>
        </>
    )
}