import React from 'react';
import Todo from './Todo';

import '../App.css';

function Todos({todos,onDelete}) {
let myStyle={
    minHeight:"70vh",
    margin:"auto"
}

    return (
        <div className="container main" style={myStyle}>
         <h3 className="text-center my-3">Todos List</h3>
       <div>
        {
            todos.length===0 ? <h5 className="no">No Todos to display</h5> : 
             todos.map((todo)=>{
                return <div className="mde"><Todo todo={todo} onDelete={onDelete}/></div>
            })
            
        }

        </div>
        </div>
    )
}

export default Todos;
