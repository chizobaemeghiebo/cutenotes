import { Link } from "react-router-dom";
import Card from "./Card";
const DeleteNote = () => {
  return (
    <div className="bg-red-100 flex justify-center items-center min-h-screen">
      <div className="w-[90%] max-w-90">
        <Card>
          <h2 className="text-2xl">
            Are you sure you want to delete this note?
          </h2>
          <div className="flex justify-between items-center my-4">
            <Link
              to="/"
              className="bg-red-50 w-20 text-center text-red-900 px-4 py-2 rounded"
            >
              Yes
            </Link>
            <Link
              to="/"
              className="bg-red-800 text-red-50 w-20 text-center px-4 py-2 rounded"
            >
              No
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DeleteNote;
