import { useState } from "react";

export default function SignUp() {
    const [name, setName] = useState()
    const [gender, setGender] = useState('남자')
    const [document, setDocument] = useState()
    const [haveBreakfest, setHaveBreakfest] = useState(true)

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }
    const handleChangeDocument = (e) => {
        setDocument(e.target.value)
    }
    const handleChangeHaveBreakfest = (e) => {
        setHaveBreakfest(e.target.checked)
    }
    

    const handleSubmit = (e) => {
        alert(`이름: ${name}, 성별: ${gender}, 문서: ${document}, 아침식사: ${haveBreakfest}`)
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: 
                <input type="text" value={name} onChange={handleChangeName} placeholder="이름을 입력해 주세요." />
            </label>
            <br />
            <label>
                성별: 
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <br />
            <label>
                도큐먼트:
                <textarea value={document} onChange={handleChangeDocument} placeholder="문장을 입력해 주세요."></textarea>
            </label>
            <br />
            <label>
                아침식사:
                <input type="checkbox" checked={haveBreakfest} onChange={handleChangeHaveBreakfest} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}