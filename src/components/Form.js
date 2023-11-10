import React from 'react'
import "./form.css"
import Swal from "sweetalert2"


export default function Form({title, setTitle, desc, setDesc, notes, setNotes}) {
  const inputHandler = (e) => {
    if(e.target.id === "title"){
      setTitle(e.target.value)
    } else{
      setDesc(e.target.value)
    }
  }

  const addHandler = (e) => {    //popUp
    e.preventDefault()
    if(title==="" && desc === ""){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You cannot add Empty Notes!",
        
      });
          
      
    }
    if(title!==""&& desc!==""){
      setNotes((note)=> {
        return(
          [...note, {
            title:title,
            desc:desc,
            id:new Date().getTime()
          }]
        )
      })
    }
    setTitle("")
    setDesc("")
  }
  return (
    <>
    <div className="container my-3">
    <div className="row justify-content-center">
    <div className="col-md-10">
    <form className='form-style'>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" id="title" placeholder='Enter the Title' value={title} onChange={inputHandler}/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
      <textarea name="desc" id="desc" rows="3" className='form-control' placeholder='Enter Your Description' value={desc} onChange={inputHandler}></textarea>
    </div>
    
    <button type="submit" className="btn btn-info" onClick={addHandler}>Add Notes</button>
  </form>

    </div>
    </div>
    </div>
    </>
  )
}
