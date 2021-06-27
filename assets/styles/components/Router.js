import React from 'react';
import TodoContextProvider from "../Context/TodoContext";
import TodoTable from "./TodoTable";
import AppSnackbar from "./AppSnackbar";
import Navigation from "./Navigation";



const Router = () =>{
    return (
    <div>
        <Navigation />
        <TodoContextProvider>
            <TodoTable />
            <AppSnackbar />
        </TodoContextProvider>
    </div>
    );
};

export default Router;