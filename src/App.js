import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(1);

  useEffect(() => {
    document.title = `Count (${count})`;
  }, [count])

  return (
    <div className="App">
      <div className="counter">
        <h2>Count ({count})</h2>
        <button onClick={() => setCount(count + 1)}>Count ({count})</button>
      </div>
    </div>
  );
}

export default App;
