import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewNote from "./pages/NewNote";
// test import delete page
import DeleteNote from "./pages/DeleteNote";
import NotePage, { noteLoader } from "./pages/NotePage";

const App = () => {
  // Add new note

  // this function gets the content of the new note in json
  const addNote = (newNote) => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    return;
  };

  // Delete a note
  const deleteNote = (id) => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  // update a note
  const editNote = (note) => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.map((activeNote) =>
      activeNote.id === note.id ? note : activeNote
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    return;
  };

  // Add Note
  // const addNote = async (newNote) => {
  //   // console.log(newNote);
  //   const res = await fetch("/api/notes", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "applicatiion.json",
  //     },
  //     body: JSON.stringify(newNote),
  //   });
  //   return;
  // };

  // Delete Note
  // const deleteNote = async (id) => {
  //   // console.log("delete", id);
  //   const res = await fetch(`/api/notes/${id}`, {
  //     method: "Delete",
  //   });
  // };

  // Edit Note
  // const editNote = async (note) => {
  //   const res = await fetch(`/api/notes/${note.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "applicatiion.json",
  //     },
  //     body: JSON.stringify(note),
  //   });
  //   return;
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/new-note"
          element={<NewNote addNoteSubmit={addNote} />}
        ></Route>
        <Route path="/delete" element={<DeleteNote />}></Route>
        <Route
          path="/notes/:id"
          element={
            <NotePage deleteNote={deleteNote} editNoteSubmit={editNote} />
          }
          loader={noteLoader}
        ></Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
