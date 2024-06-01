import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {

    setName(localStorage.getItem('name') || '');
    setEmail(localStorage.getItem('email') || '');
    setPhone(localStorage.getItem('phone') || '');
    setAddress(localStorage.getItem('address') || '');
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };


  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-3">
          <div className='card mb-4'>
            <div className="list-group">
              <NavLink exact to="/buyer" activeClassName="active" className="list-group-item list-group-item-action" aria-current="true">Profile</NavLink>
              <NavLink to="/seller" activeClassName="active" className="list-group-item list-group-item-action">Seller</NavLink>
              <NavLink to="/tailor" activeClassName="active" className="list-group-item list-group-item-action">Tailor</NavLink>
              <NavLink to="/complaint" activeClassName="active" className="list-group-item list-group-item-action">Register Complaints</NavLink>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="col-lg-9">
          <div className="card mb-4">
                <div className="card-header">
                <h4>Profile</h4>
                </div>
                <div className="card-body">
                <div className="row">
                <div className="col-md-4 text-center position-relative">
                <img src={selectedImage ? selectedImage : "https://via.placeholder.com/150"} alt="User" className="img-fluid rounded-circle mb-3"style={{height:"150px", width:"150px", border: "1px solid black", borderColor: "black" }}  />
                </div>
                <div className="col-md-8">
                  <h5>Name: {name}</h5>
                  <p>Email: {email}</p>
                  <p>Phone: {phone}</p>
                  <p>Address: {address}</p>
                  <p>Edit profile picture: &nbsp;<input type="file" accept="image/png, image/jpeg, .png, .jpg, .jpeg" className="position-absolute"onChange={handleImageChange} /></p>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Profile Section */}
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center" onClick={() => setEditProfileOpen(!editProfileOpen)} style={{ cursor: 'pointer' }}>
              <h4>Edit Profile</h4>
              <FontAwesomeIcon icon={editProfileOpen ? faChevronUp : faChevronDown} />
            </div>
            <div className={`card-body ${!editProfileOpen ? 'collapse' : ''}`}>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" defaultValue={name} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" defaultValue={email} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" className="form-control" id="phone" defaultValue={phone} />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" defaultValue={address} />
                </div>
                <button type="submit" className="btn btn-dark">Save Changes</button>
              </form>
            </div>
          </div>

          {/* Password Change Section */}
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center" onClick={() => setChangePasswordOpen(!changePasswordOpen)} style={{ cursor: 'pointer' }}>
              <h4>Change Password</h4>
              <FontAwesomeIcon icon={changePasswordOpen ? faChevronUp : faChevronDown} />
            </div>
            <div className={`card-body ${!changePasswordOpen ? 'collapse' : ''}`}>
              <form>
                <div className="mb-3">
                  <label htmlFor="currentPassword" className="form-label">Current Password</label>
                  <input type="password" className="form-control" id="currentPassword" />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">New Password</label>
                  <input type="password" className="form-control" id="newPassword" />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" id="confirmPassword" />
                </div>
                <button type="submit" className="btn btn-dark">Change Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
