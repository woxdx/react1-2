import { useState } from "react";

export default function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(true)

  const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn)
  }

  return(
    <button onClick={handleClick}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  )
}