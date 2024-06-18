import classNames from "classnames/bind";
import styles from './Dashboard.module.sass'

const cx = classNames.bind(styles)

function Dashboard() {
    return ( 
        <div className={cx('wrapper')}>
            <h2>Dashboard</h2>
        </div>
     );
}

export default Dashboard;