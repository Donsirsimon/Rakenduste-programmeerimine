import './App.css';

import Home from './pages/Home';
import Cart from './pages/Cart';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div >
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/add-item'>
        <div>Add-item, mida pole veel valmis</div>
      </Route>

    </div>
  );
}

export default App;
