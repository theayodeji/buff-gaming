import React, {createContext, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Navbar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';
import Article from './pages/Article/Article';
import Author from './pages/Author/Author';
import Error from './pages/404/404';

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />  }/>
            <Route path='/articles/:articleId' element={<Article />  }/>
            <Route path='/author' element={<Author />  }/>
            <Route path='/*' exact element={<Error errorText={"You have entered unknown edge of the site."} />  }/>
          </Routes>
          <Footer />
        </div>
    </LoginContext.Provider>
    
  );
}

export default App;
