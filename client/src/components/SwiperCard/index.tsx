import classNames from 'classnames/bind';
import styles from './Swiper.module.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const cx = classNames.bind(styles);

function SwiperCard() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className={cx('card')}>
                    <h2>Card 1</h2>
                    <p>This is card number 1</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={cx('card')}>
                    <h2>Card 2</h2>
                    <p>This is card number 2</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={cx('card')}>
                    <h2>Card 3</h2>
                    <p>This is card number 3</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default SwiperCard;
