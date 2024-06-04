import classNames from 'classnames/bind';
import styles from './Accommodation.module.sass';
import SearchForm from './SearchForm';
import HotelCard from './HotelCard';

const cx = classNames.bind(styles);

function Accommodation() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-form')}>
                <SearchForm />
            </div>
            <div className={cx('search-result')}>
                <h2>Popular Hotels</h2>
                <div className={cx('hotel-list')}>
                    <HotelCard imgUrl='./assets/image4.jpg'/>
                    <HotelCard imgUrl='./assets/image2.jpg'/>
                    <HotelCard imgUrl='./assets/image7.jpg'/>
                    <HotelCard imgUrl='./assets/image8.jpg'/>
                    <HotelCard imgUrl='./assets/image5.jpg'/>
                    <HotelCard imgUrl='./assets/image1.jpg'/>
                </div>
            </div>
        </div>
    );
}

export default Accommodation;
