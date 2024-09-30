import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import './css/signup.css';

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name]: e.target.value
    }));
    setMessage(""); // Clear message when user types
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneValidation = /^\d{10}$/;

    const { username, email, phone, gender, password, confirmPassword } = user;

    if (!username) {
      setMessage("Enter User Name!!!");
    } else if (!email) {
      setMessage("Enter Email!!!");
    } else if (!phone) {
      setMessage("Enter Phone Number!!!");
    } else if (!password) {
      setMessage("Enter Password!!!");
    } else if (!emailValidation.test(email)) {
      setMessage("Enter Proper Email!!!");
    } else if (!phoneValidation.test(phone)) {
      setMessage("Enter Proper Phone Number!!!");
    } else if (!gender) {
      setMessage("Select your Gender!!!");
    } else if (password !== confirmPassword) {
      setMessage("Both Passwords do Not Match!!");
    } else {
      setMessage("Signup Successfully...");
      setTimeout(() => {
        navigate("/");
      }, 2000); // Redirect after 2 seconds
      console.log(`Username: ${username}\nEmail: ${email}\nPhone: ${phone}\nGender: ${gender}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`);
    }
  };

  return (
    <>
      <div className='signup'>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
          <div className='form-group'>
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              name='username'
              value={user.username}
              placeholder='Enter Name'
              id='username'
              autoComplete='off'
              onChange={handleChange}
              className='input-field'
            />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name='email'
              value={user.email}
              placeholder='Enter Email'
              id='email'
              autoComplete='off'
              onChange={handleChange}
              className='input-field'
            />
          </div>
          <div className='form-group'>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel" // Changed to "tel" for phone input
              name='phone'
              value={user.phone}
              placeholder='Enter Phone Number'
              id='phone'
              autoComplete='off'
              onChange={handleChange}
              className='input-field'
            />
          </div>
          <div className='form-group'>
            <label>Gender:</label>
            <div className="gender-options">
              <div>
                <input
                  type="radio"
                  name='gender'
                  value="Male"
                  id='gender-male'
                  onChange={handleChange}
                  className="form-radio"
                />
                <span htmlFor="gender-male">Male</span>
              </div>
              <div>
                <input
                  type="radio"
                  name='gender'
                  value="Female"
                  id='gender-female'
                  onChange={handleChange}
                  className="gender-female form-radio"
                />
                <span htmlFor="gender-female">Female</span>
              </div>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor="password">Password:</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                value={user.password}
                placeholder='Enter Password'
                id='password'
                autoComplete='off'
                onChange={handleChange}
                className='input-field'
              />
              <span className='password-toggle' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </span>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <div className="password-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name='confirmPassword'
                value={user.confirmPassword}
                placeholder='Enter Confirm Password'
                id='confirmPassword'
                autoComplete='off'
                onChange={handleChange}
                className='input-field'
              />
              <span className='password-toggle' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </span>
            </div>
          </div>
          <button className='signup-button' aria-label='signUp'>Signup</button>
        </form>
        {message && <div className={`message ${message.includes('Successfully') ? 'success' : 'error'}`}>{message}</div>}
      </div>
    </>
  );
};

export default Signup;
