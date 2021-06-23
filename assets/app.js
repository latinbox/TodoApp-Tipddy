import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoContextProvider from './styles/Context/TodoContext';
import TodoTable from './styles/components/TodoTable';
import AppSnackbar from './styles/components/AppSnackbar';
import DefaultThemeProvider from "./styles/components/themes/DefaultThemeProvider";


class App extends Component {
    render() {
        return (
           <TodoContextProvider>
                   <TodoTable />
                   <AppSnackbar />
           </TodoContextProvider>
        );
    }
}

ReactDOM.render(
    <DefaultThemeProvider>
        <App/>
    </DefaultThemeProvider>
    , document.getElementById('root'));