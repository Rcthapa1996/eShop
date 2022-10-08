import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>

          <Route path="/login" element={
            <Login />}
          />

          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>}
          />

          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
