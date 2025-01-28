import { FaPlus } from "react-icons/fa";
import Card from "../components/Card";
import NoteListings from "../components/NoteListings";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-red-100 min-h-screen relative">
      <div className="md:container mx-auto w-[90%] rounded-md">
        <h1 className="py-8 text-3xl text-center font-bold">Cute Notes</h1>
        {/* lists of notes */}
        <NoteListings />
      </div>
      {/* Add note button  */}
      <button className="bg-[#f08080] text-white text-bold h-[50px] w-[50px] fixed bottom-8 right-4 rounded-full flex flex-col items-center justify-center">
        <a href="/new-note">
          <FaPlus className="inline-block" />
        </a>
      </button>
    </div>
  );
};

export default HomePage;
