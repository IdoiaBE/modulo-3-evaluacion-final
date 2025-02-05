
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Home from './Home';
import getDataApi from '../services/api';


function App() {
  const [listCharacters, setListCharacters] = useState ([]);
  const [filters, setFilters] = useState({
    byName: "",
    byHouse: "",
  })

  useEffect (()=>{
    getDataApi("gryffindor").then(data => setListCharacters(data))
  }, [])

  const changeFilters = (key, value) =>{
    if(key === "name"){
      setFilters({...filters, byName: value})
    } else{
      setFilters({...filters, byHouse: value})
    }
  }
 
  

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