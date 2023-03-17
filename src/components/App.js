import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [gregsList, setGregsList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(response => response.json())
    .then(data => setGregsList(data))
  }, [])

    return (
      <div className="app">
        <Header setSearchTerm={setSearchTerm}/>
        <ListingsContainer gregsList={gregsList} setGregsList={setGregsList} searchTerm={searchTerm}/>
      </div>
  );
}

export default App;
