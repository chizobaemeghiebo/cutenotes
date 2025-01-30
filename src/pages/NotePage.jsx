// useparams is a hook that allows us to access the parameters of the current route e.g /note/:noteId
import { useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { FaCalendar } from "react-icons/fa";
const NotePage = () => {
  const { id } = useParams();
  const note = useLoaderData();

  return (
    <div className="flex flex-col items-center bg-red-100 min-h-screen relative">
      <div className="container mx-auto w-[90%] rounded-md">
        <div className=" flex flex-col md:grid md:grid-cols-2 gap-4 lg:grid-cols-3">
          <Card>
            <h3 className="font-title">{note.title}</h3>
            <p className="font-note">{note.content}</p>
            <span className="text-gray-500 text-sm flex gap-2 items-center">
              <FaCalendar /> {note.date}
            </span>

            <Link to={`/notes/${note.id}`}>open</Link>
          </Card>
        </div>
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
