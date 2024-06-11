import { useState } from "react";Calculator
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default function calculator() {
    const [temperature, setTemperature] = useState()
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature)
        setScale('c')
    }
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature)
        setScale('f')
    }
    const celsius = (scale === 'f' ? tryConvert(temperature, toCelsius) : temperature)
    const fahrenheit = (scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature)

    return (
        <>
            <TemperatureInput
             scale = 'c'
             temperature={celsius}
             onTemperaturenChange={handleCelsiusChange}/>
            <TemperatureInput
             scale='f'
             temperature={fahrenheit}
             onTemperaturenChange={handleFahrenheitChange}/>
             <BoilingVerdict celsius={parseFloat(celsius)} />
        </>
    )
}
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
    return (
        (fahrenheit-32) * 5/9
    )
}
function toFahrenheit(celsius) {
    return (
        (celsius * 9/5) + 32
    )
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) {
        return('')
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}