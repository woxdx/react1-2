import { useState } from "react";
import Greeting from "./Greeting";

export default function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLoginClick = () => {
        setIsLoggedIn(true)
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false)
    }

    // 엘리먼트 변수
    let button;
    if(isLoggedIn){
        button = <Logoutbutton onClick={handleLogoutClick}/>
    }else {
        button = <Loginbutton onClick={handleLoginClick}/>
    }

    return(
        <>
            <Greeting isLoggedIn={isLoggedIn} />
            {/* 엘리먼트 변수 호출*/}
            {button}
        </>
    )
}

function Loginbutton(props) {
    return (
        <button onClick={props.onClick}>로그인</button>
    )
}

function Logoutbutton(props) {
    return (
        <button onClick={props.onClick}>로그아웃</button>
    )
}