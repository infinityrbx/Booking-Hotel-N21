import classNames from 'classnames/bind';
import styles from './PopularPlaces.module.sass';
import HotelCard from '../../../components/HotelCard';
import useFetch from '../../../hooks/useFetch';

const cx = classNames.bind(styles);

interface Place {
    _id: string;
    name: string;
    city: string;
    photos: string;
    cheapestPrice: number;
    rating: number;
}

function PopularPlaces() {
    const { data, loading } = useFetch<Place[]>(
        'https://booking-hotel-n21.onrender.com/api/hotel?featured=true',
    );

    return (
        <div className={cx('wrapper')}>
            <h1>Popular Places</h1>
            {loading ? (
                'Loading please wait'
            ) : (
                <div className={cx('hotel-list')}>
                    {data &&
                        data.map((place, index) => (
                            <HotelCard
                                key={index}
                                item={place}
                            />
                        ))}
                </div>
            )}
        </div>
    );
}

export default PopularPlaces;
