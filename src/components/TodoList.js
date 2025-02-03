import TodoItem from "./TodoItem";
import List from '@mui/material/List';
const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
    return (
        <>
            <h4 className="task-list-header">Task Lists</h4>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
                ))}
            </List>
        </>

    );
}

export default TodoList