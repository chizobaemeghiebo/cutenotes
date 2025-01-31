// useparams is a hook that allows us to access the parameters of the current route e.g /note/:noteId
import { useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import BackIcon from "../assets/images/arrow-left.svg";
const NotePage = () => {
  const { id } = useParams();
  const note = useLoaderData();

  // TODO: Add date

  return (
    <div className="flex flex-col items-center justify-center bg-red-100 min-h-screen relative">
      <div className="container mx-auto w-[90%] rounded-md max-w-2xl relative">
        <Link
          to="/"
          className="flex gap-2 hover:text-[#f08080] absolute -top-20 left-0"
        >
          <img src={BackIcon} alt="go back" />
          <span className="inline-block">Go back</span>
        </Link>
        <Card>
          <h1 className="text-center mb-8 font-title text-2xl">Edit Note</h1>
          <div className="relative p-2 border border-red-200 rounded">
            <p>{note.title}</p>
            <input
              type="text"
              placeholder="title"
              className="w-full focus:ring-0 outline-0"
            />
          </div>
          <div className="my-4 p-2 border border-red-200 rounded">
            <p>{note.content}</p>
            <textarea
              placeholder="your notes"
              rows={7}
              className="w-full focus:ring-0 outline-0"
            ></textarea>
          </div>

          <Link
            to="/"
            className="bg-red-100 text-center text-red-900 rounded font-bold outline-0 focus:ring-0 py-2"
          >
            Done
          </Link>

          {/* <h3 className="font-title">{note.title}</h3>
          <p className="font-note">{note.content}</p>
          <span className="text-gray-500 text-sm flex gap-2 items-center">
            <FaCalendar /> {note.date}
          </span>
          <Link to={`/notes/${note.id}`}>open</Link> */}
        </Card>
      </div>
    </div>
  );
};

// This function is used to fetch a single note from the server using the id of the note as a parameter to the function and returns the data of the note as an object.
const noteLoader = async ({ params }) => {
  const res = await fetch(`/api/notes/${params.id}`);
  const data = await res.json();
  return data;
};

export { NotePage as default, noteLoader };

// The code below is the logic for fetching a single note from the server using useEffect and useState hooks
// useParams returns an object of key/value pairs of URL parameters e.g /note/:noteId
//  const { id } = useParams();
// // set the state of the note to null when the page is loading
// const [note, setNote] = useState(null);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const fetchNote = async () => {
//     try {
//       const res = await fetch(`/api/notes/${id}`);
//       const data = await res.json();
//       setNote(data);
//     } catch (error) {
//       console.log("Error fetching data", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchNote();
// }, []);
