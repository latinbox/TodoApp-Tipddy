import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DefaultThemeProvider from "./styles/components/themes/DefaultThemeProvider";
import Router from './styles/components/Router';


class App extends Component {
    render() {
        return <Router/>;
    }
}

ReactDOM.render(
    <DefaultThemeProvider>
        <App/>
    </DefaultThemeProvider>
    , document.getElementById('root'));

export default App;