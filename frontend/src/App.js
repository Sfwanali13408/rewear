import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './pages/register';

import Login from './pages/login';
import Home from './pages/index';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import CategoryLists from './components/category_lists';
<<<<<<< HEAD
import Profile from './pages/Profile';
=======
import Error404 from './components/error404';
import ProfilePage from './routes/profile';
import ProductPage from './components/productpage';
>>>>>>> a81445aebe1174fc28c1afbe8084dc424af045aa

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/product/:productId"  component={ProductPage}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
<<<<<<< HEAD
        <Route path='/category' element={<CategoryLists />} />
        <Route path='/profile' element={<Profile />} />

=======
        {/* <Route path='/category' element={<CategoryLists />} /> */}
>>>>>>> a81445aebe1174fc28c1afbe8084dc424af045aa
        <Route path='/' element={<>
          <CategoryLists />
          <Home />
        </>} />
        <Route path='*' element={<Error404 />} />
      </Routes>

    </Router>
  );
}

export default App;
