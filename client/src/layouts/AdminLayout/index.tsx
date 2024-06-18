import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import styles from './AdminLayout.module.sass';
import Header from './Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

type Props = {
    children: ReactNode;
};

function AdminLayout({ children }: Props) {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}><Header /></div>
            <div className={cx('sidebar')}><Sidebar /></div>
            <div className={cx('container')}>
                {children}
            </div>
        </div>
    )
}

export default AdminLayout;
