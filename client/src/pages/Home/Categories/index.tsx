import classNames from 'classnames/bind';
import styles from './Categories.module.sass';
import useFetch from '../../../hooks/useFetch';

const cx = classNames.bind(styles);

interface Category {
    type: string;
    count: number;
}

function Categories() {
    const { data, loading, error } = useFetch<Category[]>('https://booking-hotel-n21.onrender.com/api/hotel/countByType');

    console.log(data)

    const images = [
        'https://i.pinimg.com/564x/7f/6f/0a/7f6f0a8668aa2da61d9025859406e2f1.jpg',
        'https://i.pinimg.com/564x/6d/5f/ad/6d5fad8535662c43f4e4f2770577af6d.jpg',
        'https://i.pinimg.com/564x/1d/1c/a4/1d1ca4080191e2854113ad405c865066.jpg',
        'https://i.pinimg.com/564x/83/1f/e7/831fe7cdc27fcbe558961dbf05956e01.jpg',
        'https://i.pinimg.com/564x/3d/60/25/3d602595973e7675bfa5f634f5768037.jpg',
        'https://i.pinimg.com/564x/5e/4c/dd/5e4cddcd74d2b1bbfbbf637da541587c.jpg',
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('category-image')}>
                    <div className={cx('image1')}>
                        <img src={import.meta.env.BASE_URL + 'assets/image2.jpg'} alt="" />
                    </div>
                    <div className={cx('image2')}>
                        <img src={import.meta.env.BASE_URL + 'assets/image7.jpg'} alt="" />
                    </div>
                    <div className={cx('image3')}>
                        <img src={import.meta.env.BASE_URL + 'assets/image7.jpg'} alt="" />
                    </div>
                </div>
            </div>
            <div className={cx('content')}>
                <h1>Our categories for you</h1>
                {loading ? (
                    'Loading please wait'
                ) : (
                    <div className={cx('content-item')}>
                        {data &&
                            images.map((img, index) => (
                                <div key={index} className={cx('category-card')}>
                                    <div className={cx('card-image')}>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className={cx('card-title')}>
                                        <h3>{data[index]?.type}</h3>
                                        <p>{data[index]?.count} {data[index]?.type}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Categories;
