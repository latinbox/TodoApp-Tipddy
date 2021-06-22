import React, {useContext} from 'react';
import {Button, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import PropTypes from "prop-types";
import {Dialog} from "@material-ui/core";
import {TodoContext} from "../Context/TodoContext";

function DeleteDialog(props) {
    const context = useContext(TodoContext);
    const hide = () => {
        props.setDeleteConfirmIsShown(false);
    }
        return (
            <Dialog onClose={hide} fullWidth={true} maxWidth='sm' open={props.open}>
                <DialogTitle>Are you sure to delete this task?</DialogTitle>
            <DialogContent>
                {props.todo.name}
            </DialogContent>
                <DialogActions>
                    <Button onClick={hide}>Cancel</Button>
                    <Button onClick={()=>{
                        context.deleteTodo({id: props.todo.id, name: props.todo.name});
                        hide();
                    }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        );
}

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setDeleteConfirmIsShown: PropTypes.func.isRequired,
    todo: PropTypes.shape = ({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }),
};
export default DeleteDialog;
