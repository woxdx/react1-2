import { useState } from "react";

export default function RequstForm() {
    const [value, setValue] = useState('사과')
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        alert('선택한 과일: ' + value)
        e.preventDefault() // 새로고침 방지
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일 선택:&nbsp;
                <select multiple={true} value={value} onChange={handleChange}>&nbsp;&nbsp;
                    <option value="사과">사과</option>
                    <option value="바나나">바나나</option>
                    <option value="포도">포도</option>
                </select>
                <button type="submit">제출</button>
            </label>
        </form>
    )
}