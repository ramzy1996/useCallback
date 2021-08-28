import { useCallback, memo, useEffect, useState, useMemo } from "react";
import "./styles.css";

const App = (props) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(Math.floor(Math.random() * 1000));
  }, []);
  // Math.floor(Math.random() * 100)
  return (
    <div className="App">
      Count {count}
      <br />
      <Increment inc={increment} />
      <br />
      <Square count={count} />
    </div>
  );
};
const Square = (props) => {
  const [number, setNumber] = useState(0);
  const onNumberChanged = (event) => {
    setNumber(event.target.value);
  };
  const calculate = useMemo(() => {
    if (number && number > 0) {
      const time = new Date().getTime();
      let value = 0;
      while (value < 3) {
        value = (new Date().getTime() - time) / 1000;
      }
      return number * number;
    } else {
      return 0;
    }
  }, [number]);
  return (
    <div>
      {props.count}Square of <input onChange={onNumberChanged} value={number} />{" "}
      is {calculate}
    </div>
  );
};

const Increment = memo((props) => {
  console.log("incerement rendered");
  return <button onClick={props.inc}>Incerement</button>;
});
export default App;
