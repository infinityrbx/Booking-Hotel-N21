import classNames from 'classnames/bind';
import styles from './Featured.module.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useFetch from '../../../hooks/useFetch';

const cx = classNames.bind(styles);

const cityNames = ['Luangprabang', 'Vientiane', 'HaNoi', 'DaNang'];

function Featured() {
    const { data, loading, error } = useFetch<number[]>(
        'https://booking-hotel-n21.onrender.com/api/hotel/countByCity?cities=Luangprabang,Vientiane,Hanoi,DaNang',
    );

    const images = [
        'https://i.pinimg.com/736x/38/54/e1/3854e1078cf60ed154643a39bebba303.jpg',
        'https://i.pinimg.com/564x/dc/33/43/dc3343e8b0b3b507a9b320cbdb9e49c9.jpg',
        'https://i.pinimg.com/564x/64/ef/ac/64efacc0b599119b7d6fb3c8fc521249.jpg',
        'https://i.pinimg.com/564x/37/8a/c7/378ac72360b3eb1689a2681a8a2301ec.jpg',
    ];

    return (
        <div className={cx('wrapper')}>
            <h1>Destination</h1>
            <div className={cx('featured')}>
                {loading ? (
                    'Loading please wait'
                ) : (
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {data && images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className={cx('featured-item')}>
                                    <img src={img} alt="" />
                                    <div className={cx('info')}>
                                        <div className={cx('info-content')}>
                                            <h3>{cityNames[index]}</h3>
                                            <p>1 places</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
}

export default Featured;
