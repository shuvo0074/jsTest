import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCounter = setInterval(
      () => setCount((prev) => prev + Math.floor(Math.random() * 10)),
      1000
    );

    return () => {
      clearInterval(updateCounter);
    };
  }, []);

  return (
    <div>
      <div>Wrong Count: {count}</div>
    </div>
  );
}
