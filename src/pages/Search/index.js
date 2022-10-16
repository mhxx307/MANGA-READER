import {
    faAngleDown,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import MangaList from './MangaList';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <h1 className={cx('title')}>Tìm kiếm</h1>
                    {/* optional */}
                </div>
                <ul className={cx('nav')}>
                    <li className={cx('nav-item')}>
                        <p>Tìm kiếm</p>
                        <div className={cx('input-wrap')}>
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className={cx('search-icon')}
                            />
                            <input
                                className={cx('input')}
                                placeholder="Enter manga name..."
                            />
                        </div>
                    </li>
                    <li className={cx('nav-item')}>
                        <p>Thể loại</p>
                        <div className={cx('dropdown')}>
                            <div className={cx('dropdown-select')}>
                                <span className={cx('dropdown-selected')}>
                                    Thể loại
                                </span>
                                <span className={cx('dropdown-icon')}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                            </div>
                            <ul className={cx('dropdown-list')}>
                                <li className={cx('dropdown-item')}>
                                    <span className={cx('dropdown-text')}>
                                        New
                                    </span>
                                </li>
                                <li className={cx('dropdown-item')}>
                                    <span className={cx('dropdown-text')}>
                                        New
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={cx('nav-item')}>
                        <p>Tình trạng</p>
                        <div className={cx('dropdown')}>
                            <div className={cx('dropdown-select')}>
                                <span className={cx('dropdown-selected')}>
                                    Tình trạng
                                </span>
                                <span className={cx('dropdown-icon')}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                            </div>
                            <ul className={cx('dropdown-list')}>
                                <li className={cx('dropdown-item')}>
                                    <span className={cx('dropdown-text')}>
                                        New
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <MangaList />
            </div>
        </div>
    );
}

export default Search;
