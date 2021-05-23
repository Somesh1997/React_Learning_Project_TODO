import React ,{useState} from 'react';
import "../App.css"

export const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

   const submit=(e)=>{
       e.preventDefault();
       if(!title || !desc){
           alert("Title or Description cannot be blank");
       }else{
       props.addToDo(title,desc);
       }
      
       
    }


    return (
        <div className="container my-3 kp">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}


