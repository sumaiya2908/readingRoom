import React from 'react'
import {BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import AdminLogin from './screens/AdminLogin/AdminLogin';
import HomePage from './screens/HomePage/HomePage';

function App() {
    return (
        <div>
            <Router>
                <Route path="/" exact component={HomePage}/>
                <Route path="/admin-login" component={AdminLogin}/>
            </Router>
        </div>
    )
}

export default App
