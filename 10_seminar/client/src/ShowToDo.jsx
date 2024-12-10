import React from "react";

function ShowToDo({ data }) {
  return <li key={data.id}>{data.title}</li>;
}

export default ShowToDo;
