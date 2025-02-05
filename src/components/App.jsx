
import { Route, Routes } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <>
    <Header/>
    <main className="main"> 
      <Routes>
        <Route path="/" element={<Home/>} />
        
      </Routes>
    </main>
    </>

  );
}

export default App;