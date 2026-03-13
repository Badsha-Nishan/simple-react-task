import { useState } from "react";

export default function Visible() {
  const [show, setShow] = useState(false);
  const toggleBtn = () => {
    setShow(!show);
  };
  return (
    <div>
      {show && <h1>Visibility On!</h1>}
      <button onClick={toggleBtn}>{show ? "Hide" : "Show"} Visibility</button>
    </div>
  );
}
