import React, { Component } from 'react';


class boardread extends Component {
    static defaultProps = {
        info: {
            no: 0,
            writer: '작성자',
            title: '게시판사용법',
            date: new Date()
        }
    }
    render() {
        const { no, writer, title, date } = this.props.info;
        
        return (
            <tr>
                <td>{no}</td>
                <td>{title}</td>
                <td>{writer}</td>
                <td>{date.toLocaleDateString()}</td>
            </tr>

        );
    }
}

export default boardread;