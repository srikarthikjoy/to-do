import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip  from '@mui/material/Tooltip';
const TodoItem = ({ key, todo, toggleComplete, deleteTodo }) => {
    return (
        <ListItem divider key={key} >
            <ListItemText id={key} primary={todo.task} />
                <Tooltip title={todo.completed?'Mark as Incomplete': 'Mark as Complete'}>
                    <Checkbox sx={{ml:1, mr:1}}
                        edge="end"
                        onClick={() => toggleComplete(todo.id)}
                        checked={todo.completed}
                        inputProps={{ 'aria-labelledby': key }}
                    />
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon onClick={()=>deleteTodo(todo.id)}/>
                    </IconButton>
                </Tooltip>
        </ListItem>
    );
}

export default TodoItem;