import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";


const HomePage = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div id="container">
      <ul>
        {data.map((item: dataResult) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
type dataResult ={
  id: number;
  index: number;
  name: string;
}

export default HomePage;
