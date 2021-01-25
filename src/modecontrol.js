import React, { Component } from 'react';
import Board from './board';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Boardcreate from './boardcreate';



class modecontrol extends Component{
    render(){
        return (
              <Router>
                <Switch>
                  <Route exact path='/' component={Board} />
                  <Route exact path='/create' component={Boardcreate} />
                </Switch>
              </Router>
      
        );
    }
}

export default modecontrol;