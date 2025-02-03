import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

const AddTodo = ({ addTodo }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo">
            <TextField id="standard-basic" value={task}
                onChange={(e) => setTask(e.target.value)} label="Add a new task..." variant="standard" />
            <Button type="submit" variant="contained">Add</Button>
        </form>
    );
}
export default AddTodo;