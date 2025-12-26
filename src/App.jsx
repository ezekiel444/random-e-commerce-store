import './App.css';
import Header from './container/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './container/ProductListing';
import ProductDetails from './container/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productID" element={<ProductDetails />} />
          <Route path="*" element={<div>404 Not Found!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;