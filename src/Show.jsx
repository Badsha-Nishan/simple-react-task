import { useState } from "react";

export default function Show() {
  const [visible, setVisible] = useState(false);
  const toggleBtn = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <h2>{visible && <h2>Hello everyone how are you?</h2>}</h2>
      <button onClick={toggleBtn}>{visible ? "Hide" : "Show"} content</button>
    </div>
  );
}
