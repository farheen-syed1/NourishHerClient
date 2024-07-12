import React, { useState, useEffect } from 'react';
import './Register.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from '../../assets/register.jpg';
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        localStorage.clear();
    }, []);

    const handleRegister = async () => {
        try {
            if (!name) {
                toast.error('Name is required.');
                return;
            }

            if (!email) {
                setEmailError(true);
                toast.error('Please input your email!');
                return;
            }

            if (!password) {
                toast.error('Password is required.');
                return;
            }

            if (!age) {
                toast.error('Age is required.');
                return;
            }

            const response = await axios.post('http://localhost:8080/register', {
                name,
                email,
                password,
                age
            });

            toast.success("Registration successful");
            // Handle successful registration (e.g., redirect, save token, etc.)
            navigate('/');
        } catch (error) {
            console.error('Error:', error.message);
            if (error.response && error.response.data && error.response.data.message === 'User already exists') {
                toast.error('User already exists. Please use a different email.');
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        }
    };

    return (
     
           <main className='register'>
    <div className='register__content'>
        <div className='register__image'>
            <img src={img} alt="" />
        </div>
        <div className='register__intro'>
            <h3>Discover lasting health with Nourish Her.</h3>
            <p>We blend scientific insights, tailored plans, and motivational boosts to help you achieve your weight loss and health goals.</p>
        </div>
    </div>

    <div className='register__form'>
        <div className='register__header'>
            <p>Create an Account</p>
            <h5>Welcome! Please fill in the form to register.</h5>
        </div>
        <div className='register__field'>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
        </div>
        <div className='register__field'>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder='ex. email@domain.com'
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                }}
                required
            />
            {emailError && <span className='register__error'>Please input your email!</span>}
        </div>
        <div className='register__field'>
            <label htmlFor="password">Password*</label>
            <div className='register__password-wrapper'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <span
                    onClick={() => setShowPassword(!showPassword)}
                    className='register__password-toggle'
                >
                    {showPassword ? <IoEyeOutline /> : <AiOutlineEyeInvisible />}
                </span>
            </div>
        </div>
        <div className='register__field'>
            <label htmlFor="age">Age</label>
            <input
                type="number"
                name="age"
                id="age"
                placeholder='Enter your age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
        </div>

        <div className='register__submit' onClick={handleRegister}>
            <button>Register</button>
        </div>
        <div className='register__footer'>
            <span>Already have an account?</span>
            <span onClick={() => navigate('/')}>register Here</span>
        </div>
    </div>
</main>

    
    );
};

export default Register;
