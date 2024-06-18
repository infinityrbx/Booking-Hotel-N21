import classNames from "classnames/bind";
import styles from './Menu.module.sass'
import { ReactNode } from "react";

const cx = classNames.bind(styles)

type Props = {
    children : ReactNode
    row? : boolean
    column? : boolean
}

function Menu({ children, row, column } : Props) {

    const classes = cx({
        'row-menu' : row,
        'column-menu' : column
    })

    return ( 
        <nav className={classes}>{children}</nav>
     );
}

export default Menu;