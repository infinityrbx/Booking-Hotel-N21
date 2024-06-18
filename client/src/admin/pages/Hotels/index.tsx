import classNames from "classnames/bind";
import styles from './Hotels.module.sass'

const cx = classNames.bind(styles)

function Hotels() {
    return ( 
        <div className={cx('wrapper')}>
            <h2>Hotels</h2>
        </div>
     );
}

export default Hotels;