const students = [
    { id: 1, name: "Inje" },
    { id: 2, name: "Steve" },
    { id: 3, name: "Bill" },
    { id: 4, name: "Jeff" },
    { id: 5, name: "Jone" },
]
export default function AttendanceBook() {
    return (
        <ul>
            {/* id를 키값으로 사용 */}
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}

            {/* 포맷팅된 문자열을 키값으로 사용 */}
            {students.map((student) => {
                return <li key={`id-${student.id}`}>{student.name}</li>
            })}

            {/* 인덱스를 키값으로 사용 */}
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    )
}