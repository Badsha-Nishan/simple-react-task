import { Suspense, useState } from "react";
import "./App.css";
import Texts from "./Texts";
import Show from "./Show";
import Visible from "./Visible";
import Users from "./Users";

const fetchContent = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const reduceCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const users = fetchContent();

  return (
    <>
      <section id="center">
        <h3>Get started</h3>

        <Suspense>
          <Users users={users}></Users>
        </Suspense>

        <Visible></Visible>

        <Show></Show>

        <Texts></Texts>

        <p>Count: {count}</p>
        <div>
          <button onClick={addCount}>Add</button>
          <button onClick={reduceCount}>Reduce</button>
          <button
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
