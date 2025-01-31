 
import './App.css';

import { createContext, useEffect, useState } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
export const WebContext = createContext();

function App() {
  const [dataJson, setDataJson] = useState(null);
  const fetchJson = async () => {
    const res = await fetch('/db.json')
    const jsonRes = await res.json();
    // console.log(jsonRes);
    setDataJson(jsonRes);
  }

  useEffect(() => {
    fetchJson();
  }, []);
  const router = createHashRouter([
    
    { path: "", element: <Home /> },
 


  ]);

  return (
    <WebContext.Provider value={dataJson}>
      <div className="App" data-testid="AppWrapper">
        <RouterProvider router={router} />
      </div>
    </WebContext.Provider>
  );
}



export default App;
