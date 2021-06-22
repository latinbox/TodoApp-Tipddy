import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoContextProvider from './styles/Context/TodoContext';
import TodoTable from './styles/components/TodoTable';
import AppSnackbar from './styles/components/AppSnackbar';
import {CssBaseline} from '@material-ui/core';


class App extends Component {
    render() {
        return (
           <TodoContextProvider>
               <CssBaseline>
                   <TodoTable />
                   <AppSnackbar />
               </CssBaseline>
           </TodoContextProvider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));