import React, { Component } from 'react';
import './App.css';
import Board from './board';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Boardcreate from './boardcreate';
// import Boardread from './boardread';


class App extends Component {
  maxno = 3
    state = {
      
        boards: [
          
            {
                no: 1,
                writer: 'aaa',
                title: '게시판리스트',
                date: new Date(2021, 0, 4)
            },
            {
                no: 2,
                writer: 'bbb',
                title: '월요일',
                date: new Date(2021, 0, 4)
            }
        ]
    }

    Create = (data) => {
        const { boards } = this.state;
        this.setState({
          maxno: this.state.maxno+1,
          boards: boards.concat({no: this.maxno++, date: new Date(),...data})
        })
        console.log(data);
    }

  render() {
    return (
      <div>
      <div>
        <Boardcreate onCreate={this.Create} />  
      </div>
      <div>
         <Board data={this.state.boards} />
      </div>
      </div>
    );
  }
}
export default App;
