import classNames from 'classnames/bind';
import styles from './ImageSlider.module.sass';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

type SliderProps = {
    autoSlide?: boolean;
    autoSlideInterval?: number;
    slides: string[];
    swiper?: boolean;
    slider?: boolean;
};

export default function ImageSlider({ autoSlide = false, autoSlideInterval = 3000, slides, swiper, slider }: SliderProps) {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide', {swiper : swiper}, {slider : slider})} style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((img) => (
                    <div className={cx('slide-item')}>
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>
            <div className={cx('slide-action')}>
                <button onClick={prev} className={cx('chevron-btn')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={next} className={cx('chevron-btn')}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className={cx('pagination-wrapper')}>
                <div className={cx('pagination')}>
                    {slides.map((_, i) => (
                        <div
                            className={cx('pagination-item')}
                            style={curr === i ? {padding:'5px'} : {opacity : '50%'}}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
