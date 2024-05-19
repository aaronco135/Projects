import './App.css';
import { Route, Routes, Switch } from 'react-router-dom';


import HomePage from './Pages/HomePage';
import Login from './Pages/LoginPage';
import About from './Pages/About';
import Topup from './Pages/ShowGames';
import Register from './Pages/Register';
import ManageAccount from './Pages/ManageAccount';
import Contact from './Pages/Contact';
import LoadGame from './Pages/LoadGame';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/manage-your-account' element={<ManageAccount />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/topup' element={<Topup />}></Route>

        <Route path="/topup/details/:gameName" element={<LoadGame />} />
      </Routes>
    </div>
  );
}

export default App;
