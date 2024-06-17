import classNames from 'classnames/bind';
import styles from './Login.module.sass';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

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
        } catch (err : any) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
        }

        console.log(credentials)
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <input
                    type="text"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                    className={cx('input')}
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className={cx('input')}
                />
                <button onClick={handleClick} className={cx('login-btn')}>
                    Login
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    );
}

export default Login;
