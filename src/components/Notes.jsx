const Notes = () => {
  return (
    <div className="md:container mx-auto bg-[#f08080] rounded-md p-4 w-[80%] md:w-[50%]">
      <h1 className="text-3xl text-center font-bold text-red-900">New Note</h1>
      {/* Note title */}
      <input
        type="text"
        className="p-2 my-4 bg-red-200 rounded w-full focus:outline-none"
        placeholder="Note Title"
      />

      {/* the note holder */}
      <textarea
        className="p-4 bg-red-200 my-4 rounded h-[300px] w-full focus:outline-none"
        name="note"
        id="note"
        placeholder="Your note..."
      ></textarea>
      {/* the button */}
      <button className="bg-red-900 text-white text-bold p-2 rounded w-full">
        Add Note
      </button>
    </div>
  );
};

export default Notes;
