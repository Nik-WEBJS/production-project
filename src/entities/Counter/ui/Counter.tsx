import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../module/slice/CounterSlice";
import { getCounterValue } from "../module/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispath = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispath(counterActions.increment());
  };
  const decrement = () => {
    dispath(counterActions.decrement());
  };
  return (
    <div>
      <h1>value: {counterValue}</h1>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
};
