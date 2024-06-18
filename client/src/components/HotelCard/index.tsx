import classNames from 'classnames/bind';
import styles from './HotelCard.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

type HotelCardProps = {
    item: {
        _id: string;
        name: string;
        city: string;
        photos: string;
        cheapestPrice: number;
        rating: number;
    };
};

function HotelCard({ item }: HotelCardProps) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card-img')}>
                <img src={item.photos} alt="hotel" />
            </div>
            <div className={cx('card-content')}>
                <div className={cx('header')}>
                    <div className={cx('header-item')}>
                        <FontAwesomeIcon icon={faCompass} color="#FF5722" />
                        <p>{item.city}</p>
                    </div>
                    <div className={cx('header-item')}>
                        <p>{item.rating}</p>
                        <FontAwesomeIcon icon={faStar} color="#FFD43B" />
                    </div>
                </div>
                <div className={cx('inner')}>
                    <h3>{item.name}</h3>
                    <div className={cx('footer')}>
                        <div className={cx('footer-item')}>
                            <p>${item.cheapestPrice}</p>
                        </div>
                        <div className={cx('footer-item')}>
                            <Link to={`/hotel/find/${item._id}`} className={cx('detail-btn')}>
                                Detail
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelCard;
