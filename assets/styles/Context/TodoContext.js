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
        axios.post('/api/todo/create', todo)
            .then(response => {
                console.log(response.data);
                const data = [...this.state.todos];
                data.push(response.data.todo);
                this.setState({
                    todos: data,
                });
            }).catch(error => {
                console.log(error);
        })
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
                const todos = [ ...this.state.todos];
                const todo = todos.find(todo => {
                    return todo.id === data.id;
                });
                todo.name = data.name;

                this.setState({
                    todos: todos,
                });
            }).catch(error =>{
                console.log(error);
        })
    }
    //delete
    deleteTodo(data) {
        axios.delete('/api/todo/delete/' + data.id)
            .then(response => {
                //message
                const todos = [...this.state.todos];
                const todo = todos.find(todo => {
                    return todo.id === data.id;
                });
                todos.splice(todos.indexOf(todo), 1);
                this.setState({
                    todos: todos,
                });
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
                }}>
                    {this.props.children}
                </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;