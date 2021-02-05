import React, { useState } from 'react'

function ToDo(props) {
    
    const [title, titleUpdate] = useState(props.title)

    return (
        <div style={{ paddingLeft: "8%", paddingRight: "8%" }} className="input-group mb-3">

            {props.isDone ?
                <input id={props.id} type="text" className="form-control"
                    value={title} style={checkedTodo} onChange={(e) => {

                        titleUpdate(e.target.value)
                        props.editHandler(props.id, title)
                    }} onClick={(e) => { }} />

                : <input id={props.id} type="text" className="form-control"
                    value={title} style={checkedTodo1} onChange={(e) => {

                        titleUpdate(e.target.value)
                        props.editHandler(props.id, title)
                    }} onClick={(e) => { }} />
            }

            <div className="input-group-prepend">
                <div className="input-group-text">
                    {
                        props.isDone ? <input type="checkbox" checked onChange={(e) => {

                            props.checkHandler({
                                "id": props.id,
                                "title": props.title,
                                "isDone": !props.isDone
                            })
                        }} /> : <input type="checkbox" onChange={(e) => {

                            props.checkHandler({
                                "id": props.id,
                                "title": props.title,
                                "isDone": !props.isDone
                            })
                        }} />
                    }
                </div>
            </div>

            <div className="input-group-append">
                <button className="btn btn-secondary" disabled> {props.completeAt} </button>
            </div>

            <div className="input-group-append">
                <button className="btn btn-danger" onClick={(e) => {
                    props.deleteHandler(props.id)
                }} > DELETE </button>
            </div>
        </div>
    )
}

const checkedTodo = { color: "#aaa" }
const checkedTodo1 = { color: "red" }

export default ToDo