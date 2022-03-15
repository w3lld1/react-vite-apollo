import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DOGS } from "./api";

function Test() {
  const { loading, error, data } = useQuery(GET_DOGS);

  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <div>error</div>}
      {data &&
        data.dogs.map((dog: { id: string; breed: string }) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
