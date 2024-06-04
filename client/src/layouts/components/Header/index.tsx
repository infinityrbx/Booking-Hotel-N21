import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.sass';
import Button from '../../../components/Button';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import PopperItem from '../../../components/PopperItem';
import config from '../../../config';
import Menu, { MenuItem } from '../Menu';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>VacationHomes</div>
                <div className={cx('menu')}>
                    <Menu>
                        <MenuItem title='Home' url={config.routes.home} />
                        <MenuItem title='Accommodation' url={config.routes.accommodation} />
                        <MenuItem title='Destination' url={config.routes.destination} />
                    </Menu>
                </div>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <p className={cx('username')}>Mark Smith</p>
                            <Tippy
                                placement="bottom-end"
                                interactive
                                render={(attrs) => (
                                    <div className={cx('user-menu')} tabIndex={-1} {...attrs}>
                                        <PopperWrapper>
                                            <PopperItem icon={<FontAwesomeIcon icon={faUser} />}>Profile</PopperItem>
                                            <PopperItem 
                                                to={config.routes.login}
                                                icon={<FontAwesomeIcon icon={faRightFromBracket} />}
                                            >
                                                Log out
                                            </PopperItem>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <img className={cx('avatar')} src="./assets/avatar.png" alt="avatar" />
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {/* <FontAwesomeIcon icon={faPlus} /> */}
                            <Button to={config.routes.login} >Login</Button>
                            <Button to={config.routes.register} secondary="true" >
                                Sign up
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
