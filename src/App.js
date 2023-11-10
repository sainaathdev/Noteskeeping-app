import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Notes from "./components/Notes";
import Popup from "./components/Popup";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(getNotesFromStrorage);
  const [editId, setEditId] = useState("");

  localStorage.setItem("notes", JSON.stringify(notes));

  return (
    <>
      <Popup editId={editId} notes={notes} setNotes={setNotes} />
      <h1 className="notes-text text-center m-2">Notes App</h1>
      <Form
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        notes={notes}
        setNotes={setNotes}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="notes-heading mb-3">Your Notes</h1>
            {notes.length === 0 ? (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Message</h5>
                  <p className="card-text">
                    No Notes is Available. Add your Notes to View.
                  </p>
                </div>
              </div>
            ) : (
              notes.map((element) => {
                return (
                  <Notes
                    element={element}
                    key={element.id}
                    notes={notes}
                    setNotes={setNotes}
                    setEditId={setEditId}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );

  function getNotesFromStrorage() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if (note) {
      return note;
    } else {
      return [];
    }
  }
}
