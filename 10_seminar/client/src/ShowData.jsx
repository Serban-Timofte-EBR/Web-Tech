import React, { useEffect, useState } from "react";
import ShowToDo from "./ShowToDo.jsx";

function ShowData() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );

      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  // Never work with async functions inside useEffect
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Here is the data</h1>
      <ul>
        {data.map((item) => {
          return <ShowToDo key={item.id} data={item} />;
        })}
        {/*{data.map((item) => (*/}
        {/*  <li key={item.id}>{item.title}</li>*/}
        {/*))}*/}
      </ul>
    </div>
  );
}

export default ShowData;
