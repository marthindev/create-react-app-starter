import React, { useState, useEffect } from "react";
...
function App() {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="App">
      ...
      <div>{JSON.stringify(planets)}</div>
      <div>Has error: {JSON.stringify(hasError)}</div>
    </div>
  );
}
