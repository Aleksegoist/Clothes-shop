import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    // const user = true;
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
                <Route path='/products/:category' element={<ProductList />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Route>
        </Routes>
    );
};

export default App;
