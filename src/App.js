import React, {createContext, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Navbar from './components/navigation/Navbar';

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />  }/>
          </Routes>

        </div>
    </LoginContext.Provider>
    
  );
}

export default App;
