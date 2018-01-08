import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './redux/store/index';
import RegistrationComponent from './components/registration/RegistrationComponent.jsx';
import LoginComponent from './components/login/LoginComponent.jsx';
import NavbarBlock from './components/navbarBlock/NavbarBlockComponent.jsx';
import Content from './components/content/content.jsx';
import './App.css';
import Home from './components/homePage/Home';
import {Provider} from 'react-redux';


class App extends Component {
   
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <NavbarBlock />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/authorization" component={LoginComponent} />
                            <Route path="/registration" component={RegistrationComponent} />
                            <Route path="/content" component={Content} />

                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}


export default App;
