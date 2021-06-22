import React, { Component } from 'react';
import {createContext} from "react";
import axios from "axios";

export const TodoContext = createContext();

class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
        this.readTodo();
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
        axios.get('/api/todo/read')
            .then(response=> {
                // console.log(response.data);
                this.setState({
                    todos: response.data,
                });
            }).catch(error => {
                console.log(error);
        })
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
                    readTodo: this.readTodo.bind(this),
                }}>
                    {this.props.children}
                </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;