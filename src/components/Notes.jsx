import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "./Card";
import BackIcon from "../assets/images/arrow-left.svg";

const Notes = ({ addNoteSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // the useNavigate is a function that redirects the user back to the home screen when the form is submitted
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      content,
      date: new Date(),
    };

    addNoteSubmit(newNote);

    return navigate("/");
  };

  return (
    <div className="container mx-auto w-[90%] rounded-md max-w-2xl relative">
      <Link
        to="/"
        className="flex gap-2 hover:text-[#f08080] absolute -top-20 left-0"
      >
        <img src={BackIcon} alt="go back" />
        <span className="inline-block">Go back</span>
      </Link>
      <Card>
        <h1 className="text-center mb-8 font-title text-2xl">New Note</h1>
        <form onSubmit={submitForm}>
          <div className="relative p-2 border border-red-200 rounded">
            <input
              type="text"
              placeholder="Add title"
              className="w-full focus:ring-0 outline-0"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="my-4 p-2 border border-red-200 rounded">
            <textarea
              placeholder="Start writing"
              rows={7}
              className="w-full focus:ring-0 outline-0"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="w-full  bg-red-100 text-center text-red-900 rounded font-bold py-2">
            <button type="submit" className=" outline-0 focus:ring-0 py-2">
              Done
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Notes;
