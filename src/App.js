import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";


function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://images-api.nasa.gov/search?q=%22%22")
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err, "Can't fetch first page"))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <Header />
      {loading ? <p>Loading...</p> : <ImageGallery firstPage={data} />}
    </>
  );
}

export default App;
