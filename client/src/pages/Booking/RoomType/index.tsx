import ImageBox from '../../../components/ImageBox';
import classNames from 'classnames/bind';
import styles from './RoomType.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faHandHoldingDollar, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function RoomType() {
    return (
        <div className={cx('content')}>
            <h3 className={cx('room-info')}>Deluxe Room</h3>
            <div className={cx('room-info')}>
                <ImageBox smallSquare url={import.meta.env.BASE_URL + 'assets/image3.jpg'} />
                <div style={{ flex: 1, color: '#fff' }}>
                    <p>
                        <FontAwesomeIcon icon={faUserGroup} color="#fff" /> Max guest : 2
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCouch} color="#fff" /> Furniture : 1 King bed, 1 Bathroom, Balcony
                    </p>
                </div>
                <div className={cx('room-list')}>
                    <div className={cx('price')}>
                        <p>
                            <FontAwesomeIcon icon={faHandHoldingDollar} color="#FF5722" /> Price/room/night :{' '}
                            <span style={{ color: '#FF5722', fontWeight: 700 }}>$200</span>
                        </p>
                    </div>
                    <div className={cx('check-room')}>
                        <div className={cx('room-item')}>
                            <label>101</label>
                            <input
                                type="checkbox"
                                // value={roomNumber._id}
                                // onChange={handleSelect}
                                // disabled={!isAvailable(roomNumber)}
                            />
                        </div>
                        <div className={cx('room-item')}>
                            <label>101</label>
                            <input
                                type="checkbox"
                                // value={roomNumber._id}
                                // onChange={handleSelect}
                                // disabled={!isAvailable(roomNumber)}
                            />
                        </div>
                        <div className={cx('room-item')}>
                            <label>101</label>
                            <input
                                type="checkbox"
                                // value={roomNumber._id}
                                // onChange={handleSelect}
                                // disabled={!isAvailable(roomNumber)}
                            />
                        </div>
                        <div className={cx('room-item')}>
                            <label>101</label>
                            <input
                                type="checkbox"
                                // value={roomNumber._id}
                                // onChange={handleSelect}
                                // disabled={!isAvailable(roomNumber)}
                            />
                        </div>
                        <div className={cx('room-item')}>
                            <label>101</label>
                            <input
                                type="checkbox"
                                // value={roomNumber._id}
                                // onChange={handleSelect}
                                // disabled={!isAvailable(roomNumber)}
                            />
                        </div>
                        <div className={cx('room-item')}>
                            <label>101</label>
                            <input
                                type="checkbox"
                                // value={roomNumber._id}
                                // onChange={handleSelect}
                                // disabled={!isAvailable(roomNumber)}
                            />
                        </div>
                        <div className={cx('room-item')}>
                            <label>101</label>
                            <input
                                type="checkbox"
                                // value={roomNumber._id}
                                // onChange={handleSelect}
                                // disabled={!isAvailable(roomNumber)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomType;
