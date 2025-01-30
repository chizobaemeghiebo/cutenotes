import PuffLoader from "react-spinners/PuffLoader";
// makes the spinner centered
const override = {
  display: "block",
  margin: "100px  auto",
};

const Spinner = ({ loading }) => {
  return (
    <PuffLoader
      color="#433c7a"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
