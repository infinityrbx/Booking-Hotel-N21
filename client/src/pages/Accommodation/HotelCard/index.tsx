import classNames from 'classnames/bind';
import styles from './HotelCard.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '../../../config';

const cx = classNames.bind(styles);

type HotelCardProps = {
    imgUrl : string,
}

function HotelCard({ imgUrl } : HotelCardProps) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card-img')}>
                <img src={imgUrl} alt="hotel" />
            </div>
            <div className={cx('card-content')}>
                <div className={cx('header')}>
                    <div className={cx('header-item')}>
                        <FontAwesomeIcon icon={faCompass} color="#FF5722" />
                        <p>Hanoi, VietNam</p>
                    </div>
                    <div className={cx('header-item')}>
                        <p>4.5</p>
                        <FontAwesomeIcon icon={faStar} color="#FFD43B" />
                    </div>
                </div>
                <div className={cx('inner')}>
                    <h3>Royal Hotel</h3>
                    <div className={cx('footer')}>
                        <div className={cx('footer-item')}>
                            <p>$200</p>
                        </div>
                        <div className={cx('footer-item')}>
                            <Link to={config.routes.booking} className={cx('detail-btn')}>Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelCard;
