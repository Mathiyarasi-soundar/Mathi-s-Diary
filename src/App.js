import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home.jsx';
import About from './Routes/About.jsx';
import Categories from './Routes/Categories.jsx';
import Login from './Routes/Login.jsx';
import Festivals from './categories/Indian-Festivals/Festivals.jsx';
import Folkdances from './categories/Indian-Folkdances/Folkdances.jsx';
import Weddings from './categories/Indian-weddings/Weddings.jsx';
import Cuisine from './categories/Indian-cuisine/Cuisine.jsx';
import Clothings from './categories/Indian-clothings/Clothings.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Categories />} path='/categories' />
        <Route element={<About />} path='/about' />
        <Route element={<Login />} path='/login' />
        <Route element={<Festivals />} path='/categories/indian-festivals'></Route>
        <Route element={<Folkdances />} path='/categories/indian-folkdances'></Route>
        <Route element={<Weddings />} path='/categories/indian-weddings'></Route>
        <Route element={<Cuisine />} path='/categories/indian-cuisine'></Route>
        <Route element={<Clothings />} path='/categories/indian-clothings'></Route>
      </Routes>
    </div>
  );
}

export default App;
