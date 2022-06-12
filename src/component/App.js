import React from 'react';
import Content from './Content';
import "./App.css"
import { useContext } from 'react'
import { StoreContext } from '../store'


function App() {
    const [state, dispatch] = useContext(StoreContext)
    console.log(state)
    return (
        <div>
            <input />
            <button>Add</button>
        </div>
    )
}

export default App;