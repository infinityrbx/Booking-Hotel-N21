import classNames from "classnames/bind";
import styles from './Rooms.module.sass'

const cx = classNames.bind(styles)

function Rooms() {
    return ( 
        <div className={cx('wrapper')}>
            <h2>Rooms</h2>
        </div>
     );
}

export default Rooms;