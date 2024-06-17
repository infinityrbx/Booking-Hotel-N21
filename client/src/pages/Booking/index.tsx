import classNames from 'classnames/bind';
import styles from './Booking.module.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import RoomType from './RoomType';
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';

const cx = classNames.bind(styles);

const slides = [
    'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/ee7392d7_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640',
    'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/be9a9994_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640',
    'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/0a083a4f_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640',
    'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/0a083a4f_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640',
    'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/0a083a4f_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640',
];

interface Place {
    _id: string;
    name: string;
    type: string;
    city: string;
    address: string;
    distance: string;
    photos: [string];
    title: string;
    desc: string;
    rating: number;
    rooms: [string];
    cheapestPrice: number;
}

function Booking() {
    const location = useLocation();
    const id = location.pathname.split('/')[3];

    const { data, loading, error } = useFetch<Place>(`https://booking-hotel-n21.onrender.com/api/hotel/find/${id}`);

    const { dates, options } = useContext(SearchContext);

    console.log(dates);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1: Date, date2: Date) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }

    let days = 1;

    if (dates.length > 0 && dates[0].endDate && dates[0].startDate) {
        days = dayDifference(dates[0].endDate, dates[0].startDate);
    }



    return (
        <div className={cx('wrapper')}>
            {loading ? (
                'Loading please wait'
            ) : (
                <>
                    {data && options && (
                        <>
                            <div className={cx('content')}>
                                <div className={cx('background')}>
                                    <img src={import.meta.env.BASE_URL + 'assets/image7.jpg'} alt="background" />
                                </div>
                                <div className={cx('inner')}>
                                    <div className={cx('info')}>
                                        <h2>{data?.name}</h2>
                                        <div className={cx('info-item')}>
                                            <span className={cx('category')}>{data?.type}</span>
                                            <div>
                                                <FontAwesomeIcon icon={faStar} color="#FFD43B" />
                                                <FontAwesomeIcon icon={faStar} color="#FFD43B" />
                                                <FontAwesomeIcon icon={faStar} color="#FFD43B" />
                                                <FontAwesomeIcon icon={faStar} color="#FFD43B" />
                                            </div>
                                        </div>
                                        <div className={cx('info-item')}>
                                            <FontAwesomeIcon icon={faCompass} color="#FF5722" />
                                            <p>{data?.address}</p>
                                        </div>
                                    </div>
                                    <div className={cx('action')}>
                                        <p>Price/room/night starts from</p>
                                        <h2>${data?.cheapestPrice}</h2>
                                        <Button primaryv2="true">Select room</Button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('photo-section')}>
                                <h2>Photo Gallery</h2>
                                <div className={cx('photo-wrapper')}>
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={50}
                                        slidesPerView={3}
                                        navigation
                                        pagination={{ clickable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('slide change')}
                                    >
                                        {slides.map((img, index) => (
                                            <SwiperSlide key={index} className={cx('swiper-item')}>
                                                <img src={img} alt="" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className={cx('room-section')}>
                                <div className={cx('section-header')}>
                                    <h2>Available Room Types in Royal Hotel</h2>
                                    <h3>
                                        Perfect for a {days}-night stay from <span style={{ color: '#FF5722', fontWeight: 700 }}>
                                            ${days * data.cheapestPrice * (options.room ?? 1)} - {options.room ?? 1}{' '}
                                            room
                                        </span>
                                    </h3>
                                </div>
                                <div className={cx('room-types')}>
                                    <RoomType placeId={data._id} rooms={options.room ?? 0} />
                                    
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default Booking;
