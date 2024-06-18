import classNames from 'classnames/bind';
import styles from './Login.module.sass';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../../config';

const cx = classNames.bind(styles);

function Login() {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });

    const { error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e: any) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            const res = await axios.post('https://booking-hotel-n21.onrender.com/api/auth/login', credentials);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
            navigate('/');
        } catch (err: any) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
            console.log(err.response.data)
        }

        console.log(error);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('login-form')}>
                    <div className={cx('logo')}>VacationHomes</div>
                    <h2 className={cx('title')}>Start your perfect stay</h2>
                    <div className={cx('form-content')}>
                        <h2>Login</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            onChange={handleChange}
                            className={cx('input')}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            onChange={handleChange}
                            className={cx('input')}
                            required
                        />
                        <button onClick={handleClick} className={cx('login-btn')}>
                            Login
                        </button>
                        <p style={{ display: 'flex', gap: 10 }}>
                            I don't have account.{' '}
                            <Link style={{ fontWeight: 600, color: '#4438AB' }} to={config.routes.register}>
                                Sign up
                            </Link>
                        </p>
                        {error && <span style={{ color: '#FF5722', fontWeight: 600 }}>{error.msg}</span>}
                    </div>
                </div>
                <div className={cx('login-image')}>
                    <img src="https://i.pinimg.com/originals/fb/6b/f8/fb6bf808831b64e08148b05773d5b6b0.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;
