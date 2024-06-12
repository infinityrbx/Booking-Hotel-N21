import classNames from 'classnames/bind';
import styles from './HotelCard.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '../../config';

const cx = classNames.bind(styles);

type HotelCardProps = {
    name: string;
    city: string;
    photos: string;
    price: number;
    rating: number;
}

function HotelCard({ name, city, photos, price, rating } : HotelCardProps) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card-img')}>
                <img src={photos} alt="hotel" />
            </div>
            <div className={cx('card-content')}>
                <div className={cx('header')}>
                    <div className={cx('header-item')}>
                        <FontAwesomeIcon icon={faCompass} color="#FF5722" />
                        <p>{city}</p>
                    </div>
                    <div className={cx('header-item')}>
                        <p>{rating}</p>
                        <FontAwesomeIcon icon={faStar} color="#FFD43B" />
                    </div>
                </div>
                <div className={cx('inner')}>
                    <h3>{name}</h3>
                    <div className={cx('footer')}>
                        <div className={cx('footer-item')}>
                            <p>${price}</p>
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
