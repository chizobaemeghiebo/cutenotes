import { FaCalendar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Card from "./Card";

const NoteListings = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("/api/notes");
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
        <div className=" flex flex-col md:grid md:grid-cols-2 gap-4 lg:grid-cols-3">
          {notes.map((note) => (
            <Card>
              <h3 className="font-title">{note.title}</h3>
              <p className="font-note">{note.content}</p>
              <span className="text-gray-500 text-sm flex gap-2 items-center">
                <FaCalendar /> {note.date}
              </span>

              <Link to={`/notes/${note.id}`}>open</Link>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default NoteListings;
