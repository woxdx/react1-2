import FancyBorder from "./FancyBorder";
export default function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">"어서오세요!"</h1>
            <p className="Dialog-message">"우리 사이트에 방문을 해주셔서 감사합니다."</p>
        </FancyBorder>
    );
}