import classNames from "classnames/bind";
import styles from './PopperItem.module.sass'
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

type Props = {
    icon? : ReactNode
    children : ReactNode
    to? : string
    onClick? : () => void

}

function PopperItem({ icon, children, to, onClick } : Props) {

    const props = {to, onClick}

    let Comp: React.ElementType = 'div';

    if (to) {
        Comp = Link;
    }

    return ( 
        <Comp className={cx('wrapper')} {...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
     );
}

export default PopperItem;