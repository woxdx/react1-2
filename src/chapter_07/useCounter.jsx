import { useState } from "react";

export default function (initialValue)  {
    const [count, setCount] = useState(initialValue)

    const increaseCount = () => setCount((count)=> count +1)
    const decreaseCount = () => setCount((count)=> Math.max(count-1,0))

    return [count, increaseCount, decreaseCount]
}
