import React, {Component, createContext} from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            todos: [{task: 'do something'}],
        }
    }

    //create
    createTodo(){

    }
    //read
    readTodo(){

    }
    //update
    updateTodo(){

    }
    //delete
    deleteTodo(){

    }
    render() {
        return (
                <TodoContext.Provider value={{
                    ...this.state,
                }}>
                    {this.props.children}
                </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;