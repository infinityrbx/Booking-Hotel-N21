import classNames from 'classnames/bind';
import styles from './Sidebar.module.sass';
import Menu, { MenuItem } from '../Menu';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faGear, faHome, faRocket } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>VacationHomes</div>
                <div className={cx('menu')}>
                    <Menu column>
                        <MenuItem
                            lefticon={<FontAwesomeIcon icon={faHome} />}
                            title="Dashboard"
                            url={config.routes.admin}
                        />
                        <MenuItem
                            lefticon={<FontAwesomeIcon icon={faRocket} />}
                            title="Users"
                            url={config.routes.users}
                        />
                        <MenuItem
                            lefticon={<FontAwesomeIcon icon={faChartPie} />}
                            title="Hotels"
                            url={config.routes.hotels}
                        />
                        <MenuItem
                            lefticon={<FontAwesomeIcon icon={faGear} />}
                            title="Rooms"
                            url={config.routes.rooms}
                        />
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
