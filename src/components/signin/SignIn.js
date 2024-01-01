import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem('users');
        return storedUsers ? JSON.parse(storedUsers) : [];
    });
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            const user = users.find((user) => user.email === email && user.password === password);
            if (user) {
                navigate('/');
            } else {
                setError('Invalid email or password.');
            }
        } else {
            const newUser = { email, password };
            setUsers([...users, newUser]);
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
            navigate('/');
        }
    };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setError(null);
  };

  return (
    <div className='container login-container'>
        <div className='login-card'>
            <h3>{isLogin ? 'Login' : 'Signup'}</h3>
            {error && <p className='text-danger'>{error}</p>}
            <form onSubmit={handleSubmit} className='form-control mb-3'>
                <div className='mb-3'>
                    <label className='form-text'>Email</label>
                    <input className='form-control' type='email' value={email} onChange={handleEmailChange} required />
                </div>
                <div className='mb-3'>
                    <label className='form-text'>Password:</label>
                    <input className='form-control' type='password' value={password} onChange={handlePasswordChange} required />
                </div>
                <button className='btn btn-success btn-sm px-4' type='submit'>{isLogin ? 'Login' : 'Signup'}</button>
            </form>
            <span onClick={toggleForm}>
                {isLogin ? 
                    <span>Dont have an account: <span className='fw-bold'>Signup</span></span>
                     : <span>Already have an accunt: <span className='fw-bold'>Login</span></span>
                }
            </span>
        </div>
    </div>
  );
};

export default SignIn;
