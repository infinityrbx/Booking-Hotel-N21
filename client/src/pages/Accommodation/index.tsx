import classNames from "classnames/bind";
import styles from './Accommodation.module.sass'
import SearchForm from "./SearchForm";

const cx = classNames.bind(styles)

function Accommodation() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search-form')}>
                <SearchForm />
            </div>
            <div className={cx('search-result')}></div>
        </div>
    );
}

export default Accommodation;