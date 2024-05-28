import classNames from "classnames/bind";
import styles from './SearchForm.module.sass'
import Button from "../../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function SearchForm() {

    const handleChange = () => {

    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('background')} src="./src/assets/image7.jpg" alt="background"/>
            </div>
            <h1 className={cx('heading')}>Enjoy your Vacation</h1>
            <form className={cx('form')} onSubmit={handleSubmit}>
                <div className={cx('destination')}>
                    <h4>Destination</h4>
                </div>
                <div className={cx('checkin')}>
                    <h4>Check in</h4>
                </div>
                <div className={cx('checkout')}>
                    <h4>Check out</h4>
                </div>
                <div className={cx('guestes')}>
                    <h4>Guestes</h4>
                </div>
                <Button secondary lefticon={<FontAwesomeIcon icon={faSearch}/>}></Button>
            </form>
        </div>
     );
}

export default SearchForm;