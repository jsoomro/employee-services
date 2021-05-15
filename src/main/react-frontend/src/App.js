import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployees from './components/ListEmployees';
import CreateEmployee from './components/CreateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployees}></Route>
                          <Route path = "/employees" component = {ListEmployees}></Route>
                          <Route path = "/add-employee" component = {CreateEmployee}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployee}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;