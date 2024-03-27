import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/> } />
        <Route path="/login" element={<Login/> } />
        <Route path="/product/:id" element={<ProductDetail/> } />
      </Routes>
    </div>
  );
}

export default App;
