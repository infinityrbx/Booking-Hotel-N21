import classNames from "classnames/bind";
import styles from './Popper.module.sass'
import { ReactNode } from "react";

const cx = classNames.bind(styles)

type Props = {
    children : ReactNode;
}

function Wrapper({ children } : Props) {
    return <div className={cx('wrapper')}>{children}</div>
}

export default Wrapper;