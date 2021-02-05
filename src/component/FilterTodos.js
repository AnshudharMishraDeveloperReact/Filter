import React, { useState } from 'react'

function FilterTodos(props) {

    const [isdone] = useState('all')

    return (

        <div className="form-group" style= {{ marginLeft : '8%' , width : "10%"}}>

            <select className="form-control"
                value={isdone} onChange={(e) => { props.filterTodos(e.target.value) }}>

                    <option value="all"> Select Filter </option>
                    <option value="all"> All</option>
                    <option value="completed">Completed</option>
                    <option value="pending"> Pending</option>

            </select>
        </div>

    )
}

export default FilterTodos
