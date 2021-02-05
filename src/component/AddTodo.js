import React, { useState } from 'react'


function AddTodo(props) {

    const id = Math.random() * 10000
    const [todo, todoUpdate] = useState('')
    const [completeAt, completeAtUpdate] = useState('')
    const [isDone] = useState(false)

    return (
        <div style={{ paddingLeft: "8%", paddingRight: "8%" }}>

            <form onSubmit={(e) => {
                e.preventDefault()
                props.add({ "id": id, "title": todo, "isDone": isDone , "completeAt" : completeAt , "createdAt" : Date.now()})
                todoUpdate('')
                completeAtUpdate('')
            }} >
                <div className="input-group mb-3">
                    <input type="text" value={todo} required placeholder=" Add Todo."
                        onChange={(e) => { todoUpdate(e.target.value) }} className="form-control" />
                         <input type="date" value={completeAt} required 
                        onChange={(e) => { completeAtUpdate(e.target.value) }} className="form-control" />
                    <div className="input-group-append">
                        <input className="btn btn-info" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div >
    )
}

export default AddTodo