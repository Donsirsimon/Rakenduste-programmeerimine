import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import Cart from './pages/Cart';
import {Route} from 'react-router-dom';
import AddCategory from './pages/AddCategory';
import Categories from './pages/Categories';
import AdminHome from './pages/AdminHome';
import SingleItem from './pages/SingleItem';
import EditItem from './pages/EditItem';

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
      <Route path='/admin'>
        <AdminHome />
      </Route>
      <Route path='/item/:itemId'>
        <SingleItem />
      </Route>
      <Route path='/edit-item/:itemId'>
        <EditItem />
      </Route>


    </div>
  );
}

export default App;
