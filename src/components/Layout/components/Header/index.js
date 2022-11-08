import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import NavigationHeader from './NavigationHeader';
import { useState } from 'react';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import routesConfig from '~/config/routes';
import { SearchIcon, SignOutIcon, UploadIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    { icon: <UploadIcon className={cx('menu-icon')} />, title: 'Upload' },
    { icon: <SignOutIcon className={cx('menu-icon')} />, title: 'Đăng xuất' },
];

function Header() {
    const [navbar, setNavbar] = useState(false);

    const showBackground = () => {
        if (window.scrollY >= 64) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    const currentUser = true;

    window.addEventListener('scroll', showBackground);

    // sau nay se lay tu user
    const imageTest = '';

    return (
        <header className={navbar ? cx('wrapper', 'active') : cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-left')}>
                    {/* logo */}
                    <div className={cx('logo')}>
                        <Link to={routesConfig.home}>
                            <Image src={images.logo} alt="logo" />
                        </Link>
                    </div>

                    {/* nav */}
                    <NavigationHeader />
                </div>

                <div className={cx('inner-right')}>
                    <Link to={routesConfig.search} className={cx('search-icon')}>
                        <SearchIcon className={cx('menu-icon')} />
                    </Link>
                    {currentUser ? (
                        // truyen thong tin user vao Menu component
                        <Menu items={MENU_ITEMS}>
                            <span className={cx('avatar')}>
                                {/* src lay tu user */}
                                <Image
                                    src={imageTest || images.avatarDefault}
                                    alt="avatar"
                                    className={cx('avatar-img')}
                                    fallback={images.avatarDefault}
                                />
                            </span>
                        </Menu>
                    ) : (
                        <Button primary to={routesConfig.login}>
                            Đăng nhập
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
