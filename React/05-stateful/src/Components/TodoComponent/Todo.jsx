import React, { Component } from 'react';
import "./Todo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Todo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <tr>
                <td>{this.props.todo.id}</td>
                <td>{this.props.todo.text}</td>
                <td className={(this.props.todo.checked ? "checked" : "unchecked") + " text-center todo-checkbox"}><input type='checkbox' checked={this.props.todo.checked} onChange={(e) => { this.props.checkTodo(this.props.todo) }}></input></td>
                {/* <td className={this.props.todo.checked ? "unchecked" : "checked"} onClick={() => { this.props.checkTodo(this.props.todo) }}>V</td> */}
                <td className="text-center todo-delete" onClick={() => { this.props.deleteTodo(this.props.todo) }}><FontAwesomeIcon icon="fa-trash" style={{ color: 'black', fontSize: '25px' }} />
                </td>
            </tr>
        );
    }
}

export default Todo;