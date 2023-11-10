import React from "react";

export default function Popup({editId, notes, setNotes}) {
    const updateHandler = (id) => {
        const updateNotes = notes.map((ele)=>{
            if(editId===ele.id){
                return(
                    {...ele,title:document.getElementById("edittitle").value,
                desc:document.getElementById("editdesc").value}
                )
            }else{
                return ele
            }
        })
        setNotes(updateNotes)
    }
  return (
    <>
      
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit notes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" id="edittitle" placeholder='Enter the Title' />
      
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
      <textarea name="desc" id="editdesc" rows="3" className='form-control' placeholder='Enter Your Description'></textarea>
    </div>
    
   
  </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={updateHandler}
              >
                Edit Notes
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
