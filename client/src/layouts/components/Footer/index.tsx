import classNames from 'classnames/bind';
import styles from './Footer.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-item')}>
                <div className={cx('logo')}>VacationHomes</div>
                <div className={cx('social')}>
                    <button><FontAwesomeIcon icon={faFacebook} color='#4438AB' /></button>
                    <button><FontAwesomeIcon icon={faGithub} color='#4438AB' /></button>
                    <button><FontAwesomeIcon icon={faYoutube} color='#4438AB' /></button>
                </div>
                <p>Copyright © Trường Công nghệ Thông tin và Truyền thông</p>
            </div>
            <div className={cx('content-item')}>
                <div className={cx('logo-hust')}>
                    <img src={import.meta.env.BASE_URL + 'assets/logo-soict-hust.png'} alt="" />
                    <p>Hanoi University of Science and Technology</p>
                </div>
                <div className={cx('contact')}>
                    <h4>Contact</h4>
                    <p><FontAwesomeIcon icon={faPhone} /> 0123456789</p>
                    <p><FontAwesomeIcon icon={faMailBulk} /> abc@sis.hust.edu.vn</p>
                    <p><FontAwesomeIcon icon={faMapLocationDot} /> 1 DaiCoViet, HaiBaTrung, HaNoi</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
