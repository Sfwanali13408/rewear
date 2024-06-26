import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as solidFaEnvelope, faKey as solidFaKey } from '@fortawesome/free-solid-svg-icons';
import logo from '../assests/login.png';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    setErrorMessage('');
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:3001/api/login', { email, password });
      
      const { user, token } = response.data;

      // Save token to local storage
      localStorage.setItem('token', token);
      
      // Save user details to local storage
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/');

    } catch (error) {
      let errorMsg = 'An unexpected error occurred.';
      if (error.response) {
        errorMsg = error.response.data.message;
        toast.error(errorMsg);
      } else if (error.request) {
        errorMsg = 'Network error. Please try again later.';
        toast.error(errorMsg);
      } else {
        toast.error(errorMsg);
      }
      setErrorMessage(errorMsg);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid vh-95 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'aliceblue' }}>
      <ToastContainer 
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme='dark'
        transition={Bounce}
        limit={3}
      />
      <div className="row" style={{ width: '100%', marginLeft: '15%' }}>
        <div className="col-md-6 d-none d-md-block" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '650px' }}>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card custom-card border-0 shadow-lg" style={{ maxWidth: '400px' }}>
            <div className="card-body p-5">
              <h1 className="text-center mb-4" style={{ color: 'maroon', fontFamily: 'Vujahday Script, cursive', fontWeight: 'bold' }}>Re Wear</h1>
              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <div className="input-group">
                    
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={solidFaEnvelope} />
                      </span>
                    
                    <input
                      type='email'
                      className="form-control"
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Enter your Email'
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group">
                    
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={solidFaKey} />
                      </span>
                    
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
                {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
                <div className="mb-3 text-left">
                  <a href='/forgotpassword' alt="forgot_password">Forgot Password?</a>
                </div>
                <div className="mb-3 text-center">
                  <button type='submit' className="btn btn-primary btn-block"style={{backgroundColor:"maroon",border:"none"}}>Login</button>
                </div>
                <div className="mb-3 text-center">
                  <p>Don't have an account? <Link to='/register'>Register</Link></p>
                </div>
                
              </form>
              <div className="text-center">
                  <button className="btn btn-primary" style={{ backgroundColor: '#db2525', border: 'none' }}>
                    <FontAwesomeIcon icon={faGoogle} className="mr-2" style={{ color: 'white' }} /> {/* Display G icon */}
                    Sign in with Google
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
