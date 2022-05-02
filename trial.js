import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const updateCounter = setInterval(
      () => setCount((oldCount) => oldCount + Math.floor(Math.random() * 10)),
      1000
    );
    const udateValue = (newV) => {
      setValues((oldCount) => [...oldCount, newV]);
    };
    return () => {
      clearInterval(updateCounter);
      clearInterval(udateValue);
    };
  }, []);

  return (
    <div>
      <div>Wrong Count: {count}</div>
      <div>Wrong Count: {values}</div>
    </div>
  );
}
