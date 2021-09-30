import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import Cart from './pages/Cart';
import {Route} from 'react-router-dom';
import AddCategory from './pages/AddCategory';
import Categories from './pages/Categories';

function App() {
  return (
    <div >
      <Navbar/>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/add-item'>
        <AddItem />
      </Route>
      <Route path='/add-category'>
        <AddCategory />
      </Route>
      <Route path='/categories'>
        <Categories />
      </Route>
    </div>
  );
}

export default App;
