import classNames from 'classnames/bind';
import styles from './Booking.module.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faCompass,
    faCouch,
    faHandHoldingDollar,
    faStar,
    faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import ImageBox from '../../components/ImageBox';
import RoomType from './RoomType';

const cx = classNames.bind(styles);

const slides = [
    'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/ee7392d7_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640',
    'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/be9a9994_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640',
    'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/0a083a4f_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640',
    'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/0a083a4f_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640',
    'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/0a083a4f_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640',
];

function Booking() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('background')}>
                    <img src={import.meta.env.BASE_URL + 'assets/image7.jpg'} alt="background" />
                </div>
                <div className={cx('inner')}>
                    <div className={cx('info')}>
                        <h2>Royal Hotel</h2>
                        <div className={cx('info-item')}>
                            <span className={cx('category')}>Hotels</span>
                            <div>
                                <FontAwesomeIcon icon={faStar} color="#FFD43B" />
                                <FontAwesomeIcon icon={faStar} color="#FFD43B" />
                                <FontAwesomeIcon icon={faStar} color="#FFD43B" />
                                <FontAwesomeIcon icon={faStar} color="#FFD43B" />
                            </div>
                        </div>
                        <div className={cx('info-item')}>
                            <FontAwesomeIcon icon={faCompass} color="#FF5722" />
                            <p>1 DaiCoViet, Hanoi, VietNam</p>
                        </div>
                    </div>
                    <div className={cx('action')}>
                        <p>Price/room/night starts from</p>
                        <h2>$200</h2>
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
                    <h3>Perfect for a 2-night stay</h3>
                </div>
                <div className={cx('room-types')}>
                    <RoomType />
                    <div className={cx('book-btn')}>
                        <Button primaryv2="true">Book now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;
