import { useState } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from '../assests/login.png'; // Import your image
import { Link, useNavigate } from 'react-router-dom';
import {Bounce, ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password ) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/register', {
        name,
        email,
        password
      });

      if (response.status === 201) {
        navigate('/login');
      } else {
        toast.error(response.data.msg, { key: 'errorToast' });
      }
    } catch (error) {
      console.error('Error registering user:', error.message);
      if (error.response) {
        toast.error(error.response.data.msg || 'Error registering user. Please try again.');
      } else if (error.request) {
        console.log('Request:', error.request);
      } else {
        console.log('Error message:', error.message);
      }
      setErrorMessage(error.response.data.msg);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid vh-95 d-flex align-items-center justify-content-center bg-light">
      <ToastContainer 
      position='top-right'
      autoClose= {2000}
      hideProgressBar = {false}
      newestOnTop= {false}
      closeOnClick
      rtl = {false}
      theme='dark'
      transition= {Bounce}
      limit={4}/>
      <div className="row " style={{ width: '100%', marginLeft: '15%' }}>
        <div className="col-md-6 d-none d-md-block" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'650px'}}>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card custom-card border-0 shadow-lg " style={{ maxWidth: '400px' }}>
            <div className="card-body p-5">
              <h1 className="text-center mb-4" style={{ color: 'maroon', fontFamily: 'Vujahday Script, cursive', fontWeight: 'bold'}}>Re Wear</h1>
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <input
                    type='text'
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your Name'
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type='email'
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your Email'
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Enter your Password'
                      required
                    />
                    <button className="btn btn-outline-secondary" type="button" onClick={handleShowPassword}>
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder='Confirm your Password'
                      required
                    />
                    <button className="btn btn-outline-secondary" type="button" onClick={handleShowPassword}>
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
                {errorMessage && <div className="error-message" style={{color:'red'}}>{errorMessage}</div>}
                <div className="mb-3 text-center">
                  <button type='submit' className="btn btn-primary btn-block" style={{backgroundColor: 'maroon', border:'none'}}>Register</button>
                </div>
                <div className="mb-3 text-center">
                  <p>Already Registered? <Link to='/login'>Login</Link></p>
                </div>
                
              </form>
              <div className="text-center">
                  <button className="btn btn-primary" style={{ backgroundColor: '#db2525', border: 'none' }}>
                    <FontAwesomeIcon icon={faGoogle} className="mr-2" style={{ color: 'white' }} /> {/* Display G icon */}
                    Register with Google
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
