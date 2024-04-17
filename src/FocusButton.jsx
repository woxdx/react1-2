import { useRef } from "react";

export default function FocusButton(props) {
    const inputElem = useRef(null)

    const onButtonClock = () => {
        inputElem.current.focus()
    }
    return (
        <>
            <input ref={inputElem} type="text" />
            <button onClick={onButtonClock}>focus the input</button>
        </>
    )
}