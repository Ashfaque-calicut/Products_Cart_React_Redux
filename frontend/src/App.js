// import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Cart from './components/Product/cart';

function App() {
  return (
    <div className="App">
 <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
