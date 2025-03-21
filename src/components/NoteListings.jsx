import { FaCalendar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditIcon from "../assets/images/edit.svg";
import Spinner from "./Spinner";
import Card from "./Card";

const NoteListings = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notesFromStorage = localStorage.getItem("notes");
        const res = { json: async () => JSON.parse(notesFromStorage || "[]") };
        // const res = await fetch("/api/notes");
        // get the data
        const data = await res.json();
        // set the data to the state
        setNotes(data);
      } catch (error) {
        // log the error
        console.log("Error fetching data", error);
      } finally {
        // set loading to false because finally runs eitherway
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        // show the spinner if loading is true
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 lg:grid-cols-3">
          {/* show message if there are no notes */}
          {notes.length === 0 && (
            <div className="col-span-full m-auto text-gray-500">
              No notes yet. Add a new note.
            </div>
          )}

          {notes.map((note) => (
            <Card key={note.id}>
              <div className="flex items-center justify-between">
                <h3 className="font-title">{note.title}</h3>
                <Link to={`/notes/${note.id}`} className="">
                  <img src={EditIcon} alt="edit note" />
                </Link>
              </div>
              {note.content.slice(0, 200)}
              {note.content.length > 200 && (
                <Link
                  to={`/notes/${note.id}`}
                  className="text-pink-800 text-sm"
                >
                  Read more
                </Link>
              )}

              <span className="absolute bottom-4 right-4 text-xs text-slate-900 flex gap-2">
                <FaCalendar /> {note.date}
              </span>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default NoteListings;
