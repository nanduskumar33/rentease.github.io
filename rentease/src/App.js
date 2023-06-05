//import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route , } from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import House from './pages/house/House';
function App() {
  return (

    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/house" element={<List/>} />
        <Route path="/house/:id" element={<House/>}/>
      </Routes>
    </div>
    </BrowserRouter>

  );
}
export default App;
