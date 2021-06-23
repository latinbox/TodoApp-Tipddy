import React, { Component } from 'react';
import {createContext} from "react";
import axios from "axios";

export const TodoContext = createContext();

class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            message: {},
        };
        this.readTodo();
    }

    //create
    createTodo(event, todo){
        event.preventDefault();
        axios.post('/api/todo/create', todo)
            .then(response => {
                console.log(response.data);
                if(response.data.message.level === 'success'){
                    const data = [...this.state.todos];
                    data.push(response.data.todo);
                    this.setState({
                        todos: data,
                        message: response.data.message,
                    });
                } else {
                    this.setState({
                        message: response.data.message,
                    });
                }
            }).catch(error => {
                console.log(error);
        });
    }
    //read
    readTodo(){
        axios.get('/api/todo/read')
            .then(response=> {
                 console.log(response.data);
                this.setState({
                    todos: response.data,
                });
            }).catch(error => {
                console.log(error);
        });
    }
    //update
    updateTodo(data){
        axios.put('/api/todo/update/' + data.id, data)
            .then(response =>{
                if (response.data.message.level === 'error') {
                    this.setState({
                        message: response.data.message,
                    });
                } else {
                    const todos = [...this.state.todos];
                    const todo = todos.find(todo => {
                        return todo.id === data.id;
                    });

                    todo.name = data.name;
                    todo.description = response.data.todo.description;

                    this.setState({
                        todos: todos,
                        message: response.data.message,
                    });
                }
            }).catch(error =>{
                console.log(error);
        });
    }

    //delete
    deleteTodo(data) {
        axios.delete('/api/todo/delete/' + data.id)
            .then(response => {
                if (response.data.message.level === 'error') {
                    this.setState({
                        message: response.data.message,
                    });
                } else {
                    //message
                    const todos = [...this.state.todos];
                    const todo = todos.find(todo => {
                        return todo.id === data.id;
                    });

                    todos.splice(todos.indexOf(todo), 1);

                    this.setState({
                        todos: todos,
                        message: response.data.message
                    });
                }
            }).catch(error => {
                console.log(error);
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
                    setMessage: (message) => this.setState({message: message}),
                }}>
                    {this.props.children}
                </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;