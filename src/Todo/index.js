import React from 'react';
import { useReducer, useRef } from 'react'
import reducer, { initState } from "./reducer"
import { setJob, addJob, deleteJob } from "./actions"

function Content() {

    const inputRef = useRef()

    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()

    }
    return (
        <div>

            <h1>TO DO</h1>
            <input
                ref={inputRef}
                value={job}
                placeholder="enter to do ..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }
                }
            />

            <button
                onClick={handleSubmit}
            >
                ADD
            </button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => {
                            dispatch(deleteJob(index))
                        }} > &times; </span>
                    </li>

                ))}
            </ul>
        </div>
    )


}
export default Content;