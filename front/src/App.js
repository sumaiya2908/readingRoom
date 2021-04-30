import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AdminLogin from './screens/AdminLogin/AdminLogin';
import HomeAdmin from './screens/HomePage/HomeAdmin';
import HomePage from './screens/HomePage/HomePage';

function App() {
    return (
        <div>
            <Router>
                <Route path="/" exact component={HomePage}/>
                <Route path="/admin-login" component={AdminLogin}/>
                <Route to="/admin" component={HomeAdmin}/>
            </Router>
        </div>
    )
}

export default App
