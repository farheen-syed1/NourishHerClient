import React, { useEffect, useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from '../../assets/register.jpg';
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        localStorage.clear();
    }, []);

    const handleLogin = async () => {
        try {
            if (!email) {
                setEmailError(true);
                toast.error('Please input your email!');
                return;
            }

            if (!password) {
                toast.error('Password is required.');
                return;
            }

            const response = await axios.post('http://localhost:8080/login', {
                email: email,
                password: password
            });

            const { token, role } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            toast.success("Login successfully");
            navigate('/');
        } catch (error) {
            console.error('Error:', error.message);
            if (error.response && error.response.data && error.response.data.message === 'user not found ! not registered') {
                toast.error('Invalid email/password');
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        }
    };

    return (
     
        <main className='login'>
        <div className='login__header'>
            <div className='login__logo'>
                <img src={img} alt="Nourish Her Logo" />
            </div>
            <div className='login__intro'>
                <h3>Discover lasting health with Nourish Her.</h3>
                <p>We blend scientific insights, tailored plans, and motivational boosts to help you achieve your weight loss and health goals.</p>
            </div>
        </div>

        <div className='login__form'>
            <div className='login__form-header'>
                <p>Login to an Account</p>
                <h5>Welcome Back, Nourish Her</h5>
            </div>
            <div className='login__form-body'>
                <div className='login__form-group'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder='ex. email@domain.com'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError(false);
                        }}
                        required
                    />
                    {emailError && <span className='login__error'>Please input your email!</span>}
                </div>
                <div className='login__form-group'>
                    <label htmlFor="password">Password*</label>
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                        >
                            {showPassword ? <IoEyeOutline /> : <AiOutlineEyeInvisible />}
                        </span>
                    </div>
                </div>
            </div>
            <div className='login__form-footer' onClick={handleLogin}>
                <button>Login</button>
            </div>
            <div className='login__signup'>
                <span>Don’t have an account?</span>
                <span onClick={() => navigate('/signUp')}>Signup Here</span>
            </div>
        </div>
    </main>
       
    );
};

export default Login;
