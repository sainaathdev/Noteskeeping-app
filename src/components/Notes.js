import React from 'react'
import "./notes.css"

export default function Notes({element, notes, setNotes, setEditId}) {
  const removeHandler = (id) => {
    const removeNotes = notes.filter((ele) =>{
      if(ele.id!==id){
        return ele
      }
    })
    setNotes(removeNotes)
    
  }
  const editHandler = (id)=>{
    setEditId(id)
    notes.filter((ele)=>{
      if(ele.id===id){
        document.getElementById("edittitle").value = ele.title
        document.getElementById("editdesc").value = ele.desc
      }
    })
  }

  return (
    <>
    <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{element.title}</h5>
      <p className="card-text">{element.desc}</p>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={()=>{
          editHandler(element.id)
        }}
      >
        Edit
      </button>
      <button className='btn btn-danger mx-3' onClick={()=>{
        removeHandler(element.id)
      }}>Delete</button>
    </div>
  </div> 
    </>
  )
}
