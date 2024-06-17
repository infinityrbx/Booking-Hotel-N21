import classNames from 'classnames/bind';
import styles from './Register.module.sass';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../../config';

const cx = classNames.bind(styles);

function Register() {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e: any) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            const res = await axios.post('https://booking-hotel-n21.onrender.com/api/auth/login', credentials);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
            navigate('/');
        } catch (err: any) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
        }

        console.log(credentials);
        console.log(error);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('signup-image')}>
                    <img src="https://i.pinimg.com/originals/64/d9/b3/64d9b3a1d1e7656bd0aedff68bf9f7ef.png" alt="" />
                </div>
                <div className={cx('signup-form')}>
                    <div className={cx('logo')}>VacationHomes</div>
                    <h2 className={cx('title')}>Start your perfect stay</h2>
                    <div className={cx('form-content')}>
                        <h2>Sign up</h2>
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
                        <button disabled={loading} onClick={handleClick} className={cx('signup-btn')}>
                            Sign up
                        </button>
                        <p style={{ display: 'flex', gap: 10 }}>
                            Already have an account?{' '}
                            <Link style={{ fontWeight: 600, color: '#4438AB' }} to={config.routes.login}>
                                Login
                            </Link>
                        </p>
                        {/* {error && <span style={{ color: '#FF5722', fontWeight: 600 }}>{error}</span>} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
