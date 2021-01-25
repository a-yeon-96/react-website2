import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Boardcreate from './boardcreate';
import Boardread from './boardread';

const Boardlists = styled.div`
width: 500px;
height: 400px;
box-shadow: 3px 3px 8px gray;
margin: 0 auto;
text-align: center;

h1{
    padding-top: 20px;
    color: lightsteelblue;
}

.tablediv{
    width:  400px;
    height: 200px;
    overflow: auto;
    margin: 0 auto;
    border: 3px solid #8080ff;
    border-radius: 15px;
}

.listtable{
    width:  400px;
    border: 1px solid #8080ff;
    border-collapse: collapse;
}

.listname{
    font-size: 20px;
}

td {
    font-size: 15px;
}

.button{
    width: 100px;
    height: 30px;
    border: none;
    color: white;
    background-color: slateblue;
    margin-top: 20px;
    outline: 0;
}
`

class board extends Component {
    static defaultProps = {
        data: []
    }
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         mode: 'main',
    //         // mode: 'create',
    //         list_no: 2,
    //         boards: [
    //             {
    //                 no: 1,
    //                 writer: 'aaa',
    //                 title: '게시판리스트',
    //                 date: new Date(2020, 0, 4)
    //             },
    //             {
    //                 no: 2,
    //                 writer: 'bbb',
    //                 title: '월요일',
    //                 date: new Date(2020, 0, 4)
    //             }
    //         ]
    //     }
    // }


    // getread(){
    //     var i = 0;
    //     while (i < this.state.boards.length) {
    //         var data = this.state.boards[i];
    //         if (data.id === this.state.list_no){
    //             return data;
    //         }
    //         i = i + 1;
    //     }
    // }

    // getBoard(){
    //     var _no, _title, _writer, _date, _desc, _article  = null;
    //     if(this.state.mode==='main'){
    //         _no = this.state.main.list_no;
    //         _title = this.state.main.title;
    //         _writer = this.state.main.writer;
    //         _date = this.state.main.date;
    //         _desc = this.state.main.desc;
    //         _article = <Boardlists list_no={_no} title={_title} writer={_writer} date={_date}></Boardlists>
    //     }
    //     else if(this.state.mode==='read') {
    //         var _read = this.getread();
    //         _article = <Boardlists no={_read.no} title={_read.title} writer={_read.writer} date={_read.date}></Boardlists>
    //     }
    //     else if(this.state.mode==='create') {
    //         _article = <Boardcreate onSubmit={function(_no, _title, _writer, _date){
    //             this.list_no = this.list_no + 1;

    //             var _reads = Array.from(this.state.boards);
    //             _reads.push({no: this.list_no, title: _title, writer: _writer, desc: _desc, date: _date});
    //             this.setState({
    //                 list_no: this.list_no,
    //                 mode: 'read',
    //                 boards: _reads
    //             });
    //             console.log(_title, _desc);
    //         }.bind(this)}></Boardcreate>
    //     }
    // }


    render() {
        const { data } = this.props;
        const list = data.map(
            info => (<Boardread key={info.no} info={info}/>)
        );

        return (
            <Boardlists>
            <h1>게시판 리스트</h1>
            <div className='tablediv'>  
                <table border='1' className='listtable'>
                    <tbody>
                        <tr>
                            <th className='listname'>번호</th>
                            <th className='listname'>제목</th>
                            <th className='listname'>작성자</th>
                            <th className='listname'>작성일</th>
                        </tr>
                        {list}
                    </tbody>
                </table>
            </div>
            <div> 
                <button className='button'>글쓰기</button>   
            </div>
        </Boardlists>
        );
}
}
export default board;
