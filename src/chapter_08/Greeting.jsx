export default function Greeting(props) {
    if(props.isLoggedIn) {
        return <p>안녕하세요. 반갑습니다.</p>
    } else {
        return <p>로그인 하세요!</p>
    }
}