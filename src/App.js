import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact index element={<Home />} />
          <Route exact path="*" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
