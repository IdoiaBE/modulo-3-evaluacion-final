
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Home from './Home';
import getDataApi from '../services/api';


function App() {
  const [listCharacters, setListCharacters] = useState ([]);

  useEffect (()=>{
    getDataApi("gryffindor").then(data => setListCharacters(data))
  }, [])
 
  

  return (
    <>
    <Header/>
    <main className="main"> 
      <Routes>
        <Route path="/" element={<Home listCharacters={listCharacters}/>} />
        
      </Routes>
    </main>
    </>

  );
}

export default App;