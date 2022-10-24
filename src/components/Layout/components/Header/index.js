import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import NavigationHeader from './NavigationHeader';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 64) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <header className={navbar ? cx('wrapper', 'active') : cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-left')}>
                    {/* logo */}
                    <div className={cx('logo')}>
                        <Link to="/">
                            <img src={images.logo} alt="logo" />
                        </Link>
                    </div>

                    {/* nav */}
                    <NavigationHeader />
                </div>

                <div className={cx('inner-right')}>
                    <Link to="/search" className={cx('search-icon')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                    <Button primary to="/login">
                        Đăng nhập
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
