import { useContext, useEffect } from "react";
import { ACTIONS } from "../actions/actions";
import MyContext from "../context/MyContext";

const DropDown = () => {
  const { select, selectDispatch, URL, categories, categoriesDispatch } =
    useContext(MyContext);

  const categoriesURL = `${URL}categories`;
  const { results, loading, error } = categories;
  useEffect(() => {
    fetch(categoriesURL)
      .then((response) => response.json())
      .then((results) =>
        categoriesDispatch({
          type: ACTIONS.GET_CATEGORIES,
          payload: {...categories, results, loading: false },
        })
      )
      .catch((error) =>
        categoriesDispatch({
          type: ACTIONS.ERROR,
          payload: {...categories, loading: false, error }
        })
      );
  }, [categories, categoriesURL, categoriesDispatch]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <select
      defaultValue={select}
      onChange={(e)=>selectDispatch({
        type: ACTIONS.CHANGE,
        payload: e.target.value
      })} >
   
      <option value="default">please select a category</option>
      {results.map((category, i) => 
        (<option key={i} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
