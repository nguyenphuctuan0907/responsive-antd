import axios from "axios";
import { useEffect, useState } from "react";

export default function About() {

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/hello")
      .then((response) => console.log(response));
  }, []);

  return (
    <>{data.map(value => 
         <li>{value}</li>
    )}</>
  );
}
