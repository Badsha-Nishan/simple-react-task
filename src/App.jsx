import { useState } from "react";
import "./App.css";
import Texts from "./Texts";

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



  return (
    <>
      <section id="center">
        <h3>Get started</h3>

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
