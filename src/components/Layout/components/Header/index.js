import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-left')}>
                    {/* logo */}
                    <div className={cx('logo')}>
                        <Link to="/">
                            <img src={images.logo} alt="logo" />
                        </Link>
                    </div>

                    {/* nav */}
                    <div className={cx('nav-list')}>
                        <Link to="/" className={cx('nav-item', 'active')}>
                            Manga
                        </Link>
                        <Link to="/anime" className={cx('nav-item')}>
                            Anime
                        </Link>
                        <Link to="/lightNovel" className={cx('nav-item')}>
                            Light novel
                        </Link>
                    </div>
                </div>

                <div className={cx('inner-right')}>
                    <Link to="/search" className={cx('search-icon')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                    <Link to="/login" className={cx('btn-login')}>
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
