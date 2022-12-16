import React,{Fragment, useState} from "react";


const InputTodo=()=>{

  const [description, setDescription] =useState("")


  const OnSubmitForm = async e =>{
    e.preventDefault();
    try {
    const body = {description};
     const response = await fetch("http://localhost:5000/createtodo",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(body)
      })
      // setDescription("")
      // window.location = '/'
      console.log('--check', response);
    } catch (error) {
      
    }
      
}


   
  
  return (
    <Fragment>
      <h1 className="text-center mt-5" >Pern Todo List</h1>
      <form className="d-flex " onSubmit ={OnSubmitForm}>
        <input className="form-control" type= "text" value={description} onChange={e => setDescription(e.target.value)}>
        </input >
        <button className="btn btn-success" >Add</button>
      </form>
    </Fragment>

  )


}

export default  InputTodo