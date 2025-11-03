import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products));
  }, []);
  return (
    <div>
      {data.map((item) => (
        <div>
          <img src={item.images} alt="" />
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
