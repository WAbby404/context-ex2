import ComponentA from "./ComponentA";
import "./index.css";

function App() {
  return <ComponentA />;
}

export default App;

// userContext() = React Hook that allows you to share values
//                 between multiple levels of components
//                 without passing props through each level

// Provider Component
// which component has the data we need access to? (App)
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child />
//    </MyContext.Provider>
// Component A is now the provider component, provides value of user

// Consumer Components
// 1. import React, {useContext} from 'react';
//    import {MyContext} from './ComponentA';
// 2. const value = useContext(MyContext);
// UseContext will traverse up the component tree to find the nearest provider (from ComponentD to ComponentA)

// cannot have more than 1
