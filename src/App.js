import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Home from './Components/Home';
function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
