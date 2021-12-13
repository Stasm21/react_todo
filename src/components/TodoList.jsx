import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
                {filteredTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo} />
                ))}
        </div>
    );
}

export default TodoList;
