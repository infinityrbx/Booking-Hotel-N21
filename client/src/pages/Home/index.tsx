import classNames from "classnames/bind";
import styles from './Home.module.sass'
import Intro from "./Intro";
import Featured from "./Featured";
import Categories from "./Categories";
import PopularPlaces from "./PopularPlaces";

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Intro />
            <Featured />
            <Categories />
            <PopularPlaces />
        </div>
    )
}

export default Home;