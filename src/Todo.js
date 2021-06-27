import React, { useState } from 'react'
import Api from './Api'

function Todo() {

    const [name , setName]=useState()
    const [input , setInput]=useState()

const handlechange = (e) =>{
    e.preventDefault();
    setInput(name)
}    
    return (
        <div>
            <h1>todo aaps</h1>

            <input placeholder="Text"  type="number" onChange={e =>setName(e.target.value) } />
            <button onClick={handlechange}>
                submit
            </button>
            <h1>{ input }</h1>
            <Api number={input}/>
            
        </div>
    )
}

export default Todo
