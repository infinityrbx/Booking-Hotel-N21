import classNames from "classnames/bind";
import styles from './Menu.module.sass'
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles)

type Props = {
    title : string
    lefticon? : ReactNode
    righticon? : ReactNode
    url : string
}

function MenuItem({ title, lefticon, righticon, url } : Props) {
    return ( 
        <NavLink className={(nav) => cx('menu-item', {active : nav.isActive})} to={url}>
             {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{title}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </NavLink>
     );
}

export default MenuItem;