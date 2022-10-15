import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo80} alt="logo" className={cx('logo')} />
                <div className={cx('nav')}>
                    <Link to="/" className={cx('nav-item')}>
                        Điều khoảng dịch vụ
                    </Link>
                    <Link to="/" className={cx('nav-item')}>
                        Chính sách bảo mật
                    </Link>
                    <Link to="/" className={cx('nav-item')}>
                        Liên hệ
                    </Link>
                    <Link to="/" className={cx('nav-item')}>
                        DMCA
                    </Link>
                </div>
                <p>@manga.world</p>
            </div>
        </footer>
    );
}

export default Footer;
