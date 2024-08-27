import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signin.css';
import Sidebar from './Sidebar'; // Import Sidebar component
import Header from './Header'; // Import Header component

function Signin() {

    let date = new Date().getFullYear();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Creator'); // Default role

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/register', { 
                firstName, 
                lastName, 
                phoneNumber, 
                email, 
                password, 
                role 
            });
            console.log('Registration successful:', response.data);
            navigate('/home');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className="grid-container">
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className="ui form">
                        <div className="field">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>User Role</label>
                            <select 
                                name="role" 
                                value={role} 
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="Creator">Creator</option>
                                <option value="Viewer">Viewer</option>
                                <option value="Approver">Approver</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <button type='submit' className="fluid ui button blue">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;
