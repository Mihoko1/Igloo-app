import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Join, Chatbox} from './components';


const App = () => (
    <Router>
        <Route path='/' exact component={Join} />
        <Route path='/meet' component={Chatbox} />
    </Router>
)

export default App