import { Button, Stack } from "@mui/material";
const Filter = ({ setFilter }) => {
    return (
        <div className="filter-buttons">
            <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={() => setFilter("all")}>All</Button>
            <Button variant="outlined" onClick={() => setFilter("completed")}>Completed</Button>
            <Button variant="outlined" onClick={() => setFilter("pending")}>Pending</Button>
            </Stack>
        </div>
    );
}
export default Filter;