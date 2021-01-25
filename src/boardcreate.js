import React, { Component } from 'react';
import styled from 'styled-components';

const Create = styled.div`
width: 500px;
height: 400px;
box-shadow: 3px 3px 8px gray;
margin: 0 auto;
text-align: center;

.Button{
    width: 80px;
    float: left;
    border: none;
    border-bottom: 2px solid gray;
    background-color: silver;
    color: gray;
    border-radius: 10px;
    outline: 0;
}

h1{
    padding: 20px 80px 0px 0px;
    color: lightsteelblue;
}

.title{
    width: 200px;
}

.writer{
    width: 100px;
    margin-left: 30px;
    text-align: center;
}

textarea {
    width: 350px;
    height: 200px;
    resize: none;
    margin-top: 20px;
}

.button{
    width: 100px;
    height: 30px;
    border: none;
    color: white;
    background-color: slateblue;
    margin-top: 10px;
    outline: 0;
}
`

class boardcreate extends Component{
    state = {
        
    }

    Change = (e) => {  
        console.log(e.type + ":", e.target.value);
        this.setState({
            [e.target.title]: e.target.value
        })
    }

    Submit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            writer: '',
            title: '',
            desc: ''
        });
    }

    render(){
        return(
        <Create>
            <button className='Button'>뒤로가기</button>
            <h1>글쓰기</h1>
            <form onSubmit={this.Submit}>
            <input className='title' name="title" maxLength="30" placeholder='제목을 쓰세요' onChange={this.Change} />
            <input className='writer' name="writer" maxLength="10" placeholder='작성자' onChange={this.Change}/>
            <br/>
            <textarea className='desc' name="desc" maxLength="100" onChange={this.Change} ></textarea>
            <br/>
            <button type="submit" className='button'>올리기</button>
            </form>
        </Create>
        );
    }
}

export default boardcreate;
