const Card = ({ children }) => {
  return (
    <div className="bg-[#f08080] p-4 rounded-md text-white shadow-md flex flex-col gap-2  ">
      {children}
    </div>
  );
};

export default Card;
