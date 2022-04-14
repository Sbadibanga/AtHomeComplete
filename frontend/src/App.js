
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScren'
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="header">
      <div className="container">
        <nav>
          <Link to="/"className="Rlogo"><h4>At Home</h4></Link>
          <ul className="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#resturant">Resturant</a></li>
            <li><a href="/#/signin">Sign-In</a></li>
            <li><a href="/#/cart">Cart</a></li>
          </ul>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/" element={<HomeScreen/>}/>
        </Routes>
       
    </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
