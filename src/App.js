// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/nav';
import AppRoutes from './Components/AppRoutes';
import './App.css';

function App() {
    return (
        <Router>
            <Nav />
            <AppRoutes />
        </Router>
    );
}

export default App;
