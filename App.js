import { createContext, useContext, useState } from 'react';
const ValContext = createContext(1);

function MySecComp(){
  const ctVar = useContext(ValContext);
  return <p> My Sec coomponent's{ctVar}</p>
}

function MyComponent(){
  const conVar = useContext(ValContext);
  return (
    <>
      <MySecComp/>
      <p>My Component's{conVar}</p>
    </>
  ); 
}

function App() {
  const [x, setX] = useState(8)
  const cVar = useContext(ValContext);
  return (
    <>
      <p>{cVar}</p>
      <ValContext.Provider value={x}>
        <MyComponent/>
      </ValContext.Provider>
    </> 
  )
}

export default App;
