import { createContext, useContext, useState } from 'react';

/*
What is Context API ? it helps in managing state in top level comps
and rather then passing them down on each comp in the tree, it uses 
a context-provider-consumer relationship using createContext, .provider,  useContext methods and hooks.


Though it helps in context mangment and prop-drilling problem 
but it doesn't optimize renders in teh application.

*/


// create context
const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  // context provider 
  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
        <br />
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
    //  usecontext for consumption
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

export default Parent;
