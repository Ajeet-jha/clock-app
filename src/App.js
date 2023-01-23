import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (sec < 59) {
        setSec(sec + 1);
      } else if (min < 59) {
        setSec(0);
        setMin(min + 1);
      } else {
        setSec(0);
        setMin(0);
        setHour(hour + 1);
      }
    }, 1000);
  }, [sec]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>
        {hour} : {min} : {sec}
      </p>
    </div>
  );
}
