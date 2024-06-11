import React from "react";

export default function TemperatureInput(props) {
    const scaleNames = {
        c: '섭씨',
        f: '화씨'
    }
    const handleChange = (e) => {
        props.onTemperaturenChange (e.target.value)
    }
    return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요(단위: {scaleNames[props.scale]})</legend>
            {/* <input type="number" value={temperature}
            onChange={handleChange} /> */}
            <input type="number" value={props.temperature}
            onChange={handleChange} />
        </fieldset>
    )
}