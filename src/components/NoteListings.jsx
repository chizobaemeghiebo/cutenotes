import { FaCalendar } from "react-icons/fa";
import notes from "../notes.json";
import Card from "./Card";

const NoteListings = () => {
  console.log(notes);

  return (
    <div className=" flex flex-col md:grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      {notes.map((note) => (
        <Card>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <span className="text-gray-500 text-sm flex items-center">
            <FaCalendar /> {note.date}
          </span>
        </Card>
      ))}
    </div>
  );
};

export default NoteListings;
