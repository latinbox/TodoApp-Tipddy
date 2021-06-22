import React, { Component } from 'react';
import {createContext} from "react";

export const TodoContext = createContext();

class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, name: 'do something'},
                {id: 2, name: 'do something'},
                {id: 3, name: 'do something'},
            ],
        };
    }

    //create
    createTodo(event, todo){
        event.preventDefault();
        const data = [...this.state.todos];
        data.push(todo);
        this.setState({
           todos: data,
        });

    }
    //read
    readTodo(){

    }
    //update
    updateTodo(data){
        const todos = [ ...this.state.todos];
        const todo = todos.find(todo => {
            return todo.id === data.id;
        })
        todo.name = data.name;

        this.setState({
            todos: todos,
        })
    }
    //delete
    deleteTodo(data){
        const todos = [...this.state.todos];
        const todo = todos.find(todo=> {
            return todo.id === data.id;
        });
        todos.splice(todos.indexOf(todo), 1);
        this.setState({
            todos: todos,
        });
    }
    render() {
        return (
                <TodoContext.Provider value={{
                    ...this.state,
                    createTodo: this.createTodo.bind(this),
                    updateTodo: this.updateTodo.bind(this),
                    deleteTodo: this.deleteTodo.bind(this),
                }}>
                    {this.props.children}
                </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;