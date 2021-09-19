
import "./Todolist.css"

const TodoList = (props) => {
    console.log(props.datatodos);
    return (
        <ul>{
            props.datatodos.map((Todo) => {
                return <li key={Todo.id}>{Todo.title}</li>
                })
            }   
        </ul>
        
    );
};
export default TodoList;