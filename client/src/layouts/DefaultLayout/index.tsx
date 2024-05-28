import classNames from "classnames/bind";
import { ReactNode } from "react";
import Header from "../components/Header";
import styles from './DefaultLayout.module.sass'

const cx = classNames.bind(styles)

type Props = {
    children : ReactNode;
}

function DefaultLayout({ children } : Props) {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;