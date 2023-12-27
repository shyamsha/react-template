import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorFunction } from "../store/reducerFunctions";
import { login } from "src/lib/services/postApis";
import { useLocation } from "react-router-dom";
const Home = () => {
  const { countVal } = useSelector(selectorFunction);
  let location = useLocation();
  console.log(location);
  useEffect(() => {
    const body = { name: "Rachel", profession: "Doctor" };
    login(body)
      .then((response) => {
        console.log(response, "--->response");
      })
      .catch((err) => {
        console.log(err, "-->error");
      });
  }, []);

  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <h1>Count-{countVal}</h1>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default Home;
