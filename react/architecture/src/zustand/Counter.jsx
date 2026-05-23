import useCounterStore from "./store/useCounterStore"
// no need to wrap with root or context provider 
//  just use the store insance wherever needed

function Counter() {
  return (
        <>
            <Incrase />
            <Decrease />
            <Value />
        </>
  );
}

function Decrease() {
    const decrease = useCounterStore(
        (state) => state.decrease
    )
  return <button onClick={decrease} >Decrease</button>;
}

function Incrase() {
    const increase = useCounterStore(
        (state) => state.increase
    )

  return <button onClick={increase}>Increase</button>;
}

function Value() {
    const count = useCounterStore(
        (state) => state.count
    )
  return <p>Count: {count}</p>;
}

export default Counter;
