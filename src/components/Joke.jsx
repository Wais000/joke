import { useContext } from "react";
import MyContext from "../context/MyContext";

const Joke = () => {
  const { joke } = useContext(MyContext);
  const { results, loading, error } = joke;
  if (loading) return(
  <div className="joke">
    <p>select a category and then click on the button</p>
  </div>);
  if (error) return <p>{error.message}</p>;

  return (
    <div className="joke">
      {/* <img src={results.icon_url} alt="icon" /> */}
      <p>{results.value}</p>
    </div>
  );
};

export default Joke;
