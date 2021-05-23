
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos.js';
import Footer from './Components/Footer.js';
import React ,{useState,useEffect} from 'react';
import { AddTodo } from './Components/AddTodo';

function App() {
   let initTodo=[];
  if(localStorage.getItem("todos")===null){
      initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"));
    initTodo=[];
  }



  const onDelete=(todo)=>{
    
   
   setTodos(todos.filter((e)=>{
        return e!==todo;
   }));
   localStorage.setItem("todos",JSON.stringify(todos));
 }


  const onAdd=(title,desc)=>{  
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
      sno=todos[todos.length-1].sno+1;
    } 
    let obj={
      sno:sno,
      title:title,
      desc:desc};
     
    console.log(obj);
    setTodos([...todos,obj]); 

  }
  const [todos,setTodos]=useState([initTodo]);
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
    
  },[todos])
  return (
    <>
    <Header title="myTodos list" searchBar={true}/>
    <AddTodo addToDo={onAdd} />
    
    <Todos todos={todos} onDelete={onDelete} />
    <Footer/>
    </>
  );
}

export default App;
