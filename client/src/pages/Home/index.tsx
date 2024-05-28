import classNames from "classnames/bind";
import styles from './Home.module.sass'
import Intro from "./Intro";

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Intro />
        </div>
    )
}

export default Home;