import React, { Component } from 'react';
import {createContext} from "react";

export const TodoContext = createContext();

class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {name: 'do something'},
            ],
        };
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