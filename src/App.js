import { HashRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <HashRouter >
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
      </HashRouter>
    </div>
  );
}

export default App;
