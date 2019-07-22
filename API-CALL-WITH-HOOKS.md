import React, { useState, useEffect } from "react";
...
function App() {
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res));
  }

    useEffect(() => {
      fetchData();
    });

  return (
    <div className="App">
      ...
      <div>{JSON.stringify(planets)}</div>
    </div>
  );
}

Set initial state with hooks:

const [planets, setPlanets] = useState({});

Update state with hooks:

setPlanets(res)

```
      // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetchData();
  });
  ```

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

Set initial state without hooks:

state = {
  planets: {}
}

Update state without hooks:

```
  componentDidMount(){
    fetch("https://swapi.co/api/planets/4/")
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({planets: responseData});
    });
  }
```
