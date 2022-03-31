import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// import { useSelector } from 'react-redux';

import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NewProduct from './pages/newProduct/NewProduct';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import User from './pages/user/User';
import UserList from './pages/userList/UserList';

function App() {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;

  return (
    <Router>
      {!admin
        ?
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        : (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newproduct" element={<NewProduct />} />
                <Route path="*" element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
                />
              </Routes>
            </div>
          </>
        )
      }
    </Router>
  );
};

export default App;
