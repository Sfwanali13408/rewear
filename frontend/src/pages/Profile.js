import React, { useState } from 'react';

function Profile() {
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com'
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdateProfile = () => {
        console.log('Profile updated:', userData);
        // Here you would typically make an API call to update the user data
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item">Profile</li>
                        <li className="list-group-item">Order History</li>
                        <li className="list-group-item">Become a Seller</li>
                        <li className="list-group-item">Become a Tailer</li>
                    </ul>
                </div>
                <div className="col-md-8">
                    <div className="p-4 border rounded">
                        <h3>User Profile</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={userData.name} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="password" className="form-label">Current Password</label>
                            <input type="password" className="form-control" 
                            id="curpassword" name="curpassword" value={userData.curpassword} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="password" className="form-label">New Password</label>
                        <input type="password" className="form-control"
                         id="password" name="password" value={userData.password} onChange={handleInputChange} />
                    </div>

                            <button type="button" className="btn btn-primary" onClick={handleUpdateProfile}>Update Profile</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
