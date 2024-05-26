import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './routes/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './routes/login';
import Home from './routes/index';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CategoryLists from './components/category_lists';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/category' element={<CategoryLists />} />
        <Route path='/' element={<>
          <CategoryLists />
          <Home />
        </>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
