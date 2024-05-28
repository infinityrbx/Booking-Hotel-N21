import classNames from "classnames/bind";
import styles from './Menu.module.sass'
import { ReactNode } from "react";

const cx = classNames.bind(styles)

type Props = {
    children : ReactNode
}

function Menu({ children } : Props) {
    return ( 
        <nav className={cx('menu')}>{children}</nav>
     );
}

export default Menu;