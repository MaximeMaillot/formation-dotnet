import React, { Component } from 'react';
import Todo from '../TodoComponent/Todo';
import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Text</th>
                        <th colSpan={2} className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.todos.map(todo => {
                        return <Todo todo={todo} deleteTodo={this.props.deleteTodo} checkTodo={this.props.checkTodo} key={todo.id} />
                    })}
                </tbody>
            </table>
        );
    }
}

export default TodoList;