import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoContextProvider from "./styles/Context/TodoContext";
import TodoTable from "./styles/components/TodoTable";

class App extends Component {
    render() {
        return (
           <TodoContextProvider>
               <TodoTable />
           </TodoContextProvider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));