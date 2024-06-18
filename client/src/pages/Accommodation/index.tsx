import classNames from 'classnames/bind';
import styles from './Accommodation.module.sass';
import SearchForm, { SearchFormData } from './SearchForm';
import HotelCard from '../../components/HotelCard';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

interface Place {
    _id: string;
    name: string;
    city: string;
    photos: string;
    cheapestPrice: number;
    rating: number;
}

function Accommodation() {
    const [formData, setFormData] = useState<SearchFormData | null>(null);

    const handleFormData = (data: SearchFormData) => {
        setFormData(data);
        
    };

    const { data, loading, reFetch } = useFetch<Place[]>(
        `https://booking-hotel-n21.onrender.com/api/hotel?city=${formData?.destination}`,
    );

    useEffect(() => {
        reFetch();
    }, [formData]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-form')}>
                <SearchForm onSubmit={handleFormData} />
            </div>
            <div className={cx('search-result')}>
                <h2>Popular Hotels</h2>
                {loading ? (
                    'Loading please wait'
                ) : (
                    <div className={cx('hotel-list')}>
                        {data && data.map((place, index) => <HotelCard key={index} item={place} />)}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Accommodation;
