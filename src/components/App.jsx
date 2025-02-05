
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Home from './Home';
import getDataApi from '../services/api';
import CharacterDetail from './characters/CharacterDetail';


function App() {
  const [listCharacters, setListCharacters] = useState ([]);
  const [filters, setFilters] = useState({
    name: "",
    house: "gryffindor",
  })

  useEffect (()=>{
    getDataApi(filters.house).then(data => setListCharacters(data))
  }, [filters.house])

  const changeFilters = (key, value) =>{
    setFilters({...filters, [key]: value})
  }

  const filteredCharacters = listCharacters
  .filter((character)=> character.name.toLowerCase().includes(filters.name))
  

  return (
    <>
    <Header/>
    <main className="main"> 
      <Routes>
        <Route path="/" element={<Home listCharacters={filteredCharacters} changeFilters={changeFilters}
        filters={filters}/>} />

        <Route path="/character/:characterId" element={<CharacterDetail/>}/>
        
      </Routes>
    </main>
    </>

  );
}

export default App;