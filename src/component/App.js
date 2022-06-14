import React from 'react';
import Content from './Content';
import "./App.css"
import { useContext, useRef } from 'react'
import { useStore, actions } from '../store'
import { setTodoInput } from '../store/actions';


function App() {
    const InputRef = useRef()
    const [state, dispatch] = useStore()
    const { todos, todoInput } = state

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
        dispatch(setTodoInput(''))
        InputRef.current.focus()
    }
    console.log('todoInput:', todoInput)
    return (
        <div>
            <input
                ref={InputRef}
                value={todoInput}
                placeholder="todo..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;