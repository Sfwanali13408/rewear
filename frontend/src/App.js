import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './pages/register';

import Login from './pages/login';
import Home from './pages/index';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import CategoryLists from './components/category_lists';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/category' element={<CategoryLists />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/' element={<>
          <CategoryLists />
          <Home />
        </>} />
      </Routes>

    </Router>
  );
}

export default App;
