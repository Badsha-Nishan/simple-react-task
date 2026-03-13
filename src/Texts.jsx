import { useState } from "react";

export default function Texts() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleText = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {isVisible && <h2>Hello, React Lerner!</h2>}
      <button onClick={toggleText}>{isVisible ? "Hide" : "Show"} Text</button>
    </div>
  );
}
