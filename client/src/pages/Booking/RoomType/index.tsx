import ImageBox from '../../../components/ImageBox';
import classNames from 'classnames/bind';
import styles from './RoomType.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faHandHoldingDollar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../../hooks/useFetch';
import { useContext, useEffect, useState } from 'react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { SearchContext } from '../../../context/SearchContext';
import axios from 'axios';

const cx = classNames.bind(styles);

interface Room {
    _id: string;
    title: string;
    price: number;
    maxPeople: number;
    desc: string;
    roomNumbers: [
        {
            number: number;
            unavailableDates: [];
            _id: string;
        },
    ];
}

interface RoomTypeProps {
    placeId: string;
    rooms: number;
}

function RoomType({ placeId }: RoomTypeProps) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
    const { dates } = useContext(SearchContext);

    const { data, loading } = useFetch<Room[]>(
        `https://booking-hotel-n21.onrender.com/api/hotel/room/${placeId}`,
    );

    const getDatesInRange = (startDate: Date, endDate: Date) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const date = new Date(start.getTime());

        const dates = [];

        while (date <= end) {
            dates.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return dates;
    };

    let alldates: number[];

    if (dates.length > 0 && dates[0].endDate && dates[0].startDate) {
        alldates = dates[0].startDate && dates[0].endDate && getDatesInRange(dates[0].startDate, dates[0].endDate);
    }

    const isAvailable = (roomNumber: { unavailableDates: any[] }) => {
        const isFound = roomNumber.unavailableDates.some((date: string | number | Date) =>
            alldates.includes(new Date(date).getTime()),
        );

        return !isFound;
    };

    const handleSelect = (e: any) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms((prev) => (checked ? [...prev, value] : selectedRooms.filter((item) => item !== value)));
    };

    useEffect(() => {
        console.log(selectedRooms);
    }, [selectedRooms]);

    const handleBooking = async() => {
        try {
            await Promise.all(
              selectedRooms.map(async (roomId) => {
                const res = axios.put(`https://booking-hotel-n21.onrender.com/api/room/availability/${roomId}`, {
                  dates: alldates,
                });
                return (await res).data;
              })
            );
            navigate("/");
          } catch (err) {}
        if (user) {
        } else {
            navigate('/login');
        }
    };

    return (
        <div className={cx('wrapper')}>
            {loading ? (
                'Loading please wait'
            ) : (
                <>
                    {data &&
                        data.map((room, index) => (
                            <div key={index} className={cx('content')}>
                                <h3 className={cx('room-info')}>{room.title}</h3>
                                <div className={cx('room-info')}>
                                    <ImageBox smallSquare url={import.meta.env.BASE_URL + 'assets/image3.jpg'} />
                                    <div style={{ flex: 1, color: '#fff' }}>
                                        <p>
                                            <FontAwesomeIcon icon={faUserGroup} color="#fff" /> Max guest :{' '}
                                            {room.maxPeople}
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faCouch} color="#fff" /> Furniture : {room.desc}
                                        </p>
                                    </div>
                                    <div className={cx('room-list')}>
                                        <div className={cx('price')}>
                                            <p>
                                                <FontAwesomeIcon icon={faHandHoldingDollar} color="#FF5722" />{' '}
                                                Price/room/night :{' '}
                                                <span style={{ color: '#FF5722', fontWeight: 700 }}>${room.price}</span>
                                            </p>
                                        </div>
                                        <div className={cx('check-room')}>
                                            {room.roomNumbers.map((roomItem, index) => (
                                                <div key={index} className={cx('room-item')}>
                                                    <label style={{ cursor: 'pointer' }} htmlFor={roomItem._id}>
                                                        {roomItem.number}
                                                    </label>
                                                    <input
                                                        style={{ cursor: 'pointer' }}
                                                        type="checkbox"
                                                        value={roomItem._id}
                                                        id={roomItem._id}
                                                        onChange={handleSelect}
                                                        disabled={!isAvailable(roomItem)}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    <div className={cx('book-btn')}>
                        <Button onClick={handleBooking} primaryv2="true">
                            Book now
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}

export default RoomType;
