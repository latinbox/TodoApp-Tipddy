import React, {useContext} from 'react';
import {useState} from "react";
import {TodoContext} from '../Context/TodoContext';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Container from '@material-ui/core/Container';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import * as rows from "core-js";
import {Icon, IconButton, TextField} from "@material-ui/core";
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function TodoTable() {
    const classes = useStyles();
    const context = useContext(TodoContext);
    const [addTodo, setAddTodo] = useState( '');
    return (
        <Container>
        <TableContainer component={Paper}>
            <form onSubmit={(event) => {
                context.createTodo(event,{name: addTodo})
            }}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tasks</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <TextField value={addTodo} onChange={(event) => {setAddTodo(event.target.value)}} label="New Task" fullWidth={true} />
                        </TableCell>
                        <TableCell align="right">
                            <IconButton type="submit">
                                <AddIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    {context.todos.slice().reverse().map((todo, index) => (
                        <TableRow key={'todo' + index}>
                            <TableCell component="th" scope="row">
                                {todo.name}
                            </TableCell>
                            <TableCell align="right">
                                <IconButton><EditIcon /></IconButton>
                                <IconButton> <DeleteIcon /></IconButton>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </form>
        </TableContainer>
        </Container>
    )


}

