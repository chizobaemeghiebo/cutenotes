import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewNote from "./pages/NewNote";
// test import delete page
import DeleteNote from "./components/DeleteNote";
import NotePage, { noteLoader } from "./pages/NotePage";

const App = () => {
  // Add new note

  // this function gets the content of the new note in json
  const addNote = async (newNote) => {
    // console.log(newNote);
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "content-type": "applicatiion.json",
      },
      body: JSON.stringify(newNote),
    });
    return;
  };

  // Delete a note
  const deleteNote = async (id) => {
    // console.log("delete", id);
    const res = await fetch(`/api/notes/${id}`, {
      method: "Delete",
    });
  };

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
          element={<NotePage deleteNote={deleteNote} />}
          loader={noteLoader}
        ></Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
