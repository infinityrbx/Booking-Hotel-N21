import classNames from "classnames/bind";
import styles from './Menu.module.sass'
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles)

type Props = {
    title : string
    icon? : ReactNode
    url : string
}

function MenuItem({ title, icon, url } : Props) {
    return ( 
        <NavLink className={(nav) => cx('menu-item', {active : nav.isActive})} to={url}>
             {icon && <span className={cx('icon')}>{icon}</span>}
            <span className={cx('title')}>{title}</span>
        </NavLink>
     );
}

export default MenuItem;