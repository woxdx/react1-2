export default function NumberList() {
    const numbers = [1, 2, 3, 4, 5]

    const todos = [
        {id: 1, name: "홍길동1"},
        {id: 2, name: "홍길동2"},
        {id: 3, name: "홍길동3"},
        {id: 4, name: "홍길동4"},
        {id: 5, name: "홍길동5"},
    ]

    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    const todoItems = todos.map((todo) =>
        <li key={todo.id}>{todo.name}</li>
    )
    const indexItems = todos.map((todo, index) =>
        <li key={index}>{todo.name}</li>
    )

    return (
    <>
        <ul>{listItems}</ul>
        <ul>{todoItems}</ul>
        <ul>{indexItems}</ul>
    </>
    )
}