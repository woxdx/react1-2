export default function Toolbar(props){
    const { isLoggedIn, onClickLogin, onClickLogout} = props

    return (
        <div>
            {/*논리연산자를 사용한 인라인 if*/}
            {isLoggedIn && <span>환영합니다.</span>}
            {isLoggedIn
            ? <button onClick={onClickLogout}>로그아웃</button>
            : <button onClick={onClickLogin}>로그인</button>
            }
        </div>
    )
}