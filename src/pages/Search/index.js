import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import MangaList from './MangaList';
import styles from './Search.module.scss';
import { categories, status } from '~/stores/DropdownData';
import Context from '~/stores/Context';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function Search() {
    const { categoryName, setCategoryName, statusName, setStatusName, setMangaList } =
        useContext(Context);
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
                            <SearchIcon className={cx('search-icon')} />
                            <input className={cx('input')} placeholder="Enter manga name..." />
                        </div>
                    </li>
                    <li className={cx('nav-item')}>
                        <p>Thể loại</p>
                        <div className={cx('dropdown')}>
                            <div className={cx('dropdown-select')}>
                                <span className={cx('dropdown-selected')}>{categoryName}</span>
                                <span className={cx('dropdown-icon')}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                            </div>
                            <ul className={cx('dropdown-list')}>
                                {categories.map((category, index) => {
                                    return (
                                        <li
                                            className={cx('dropdown-item')}
                                            key={index}
                                            onClick={() => {
                                                setMangaList([]);
                                                setCategoryName(category);
                                            }}
                                        >
                                            <span className={cx('dropdown-text')}>{category}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </li>
                    <li className={cx('nav-item')}>
                        <p>Tình trạng</p>
                        <div className={cx('dropdown')}>
                            <div className={cx('dropdown-select')}>
                                <span className={cx('dropdown-selected')}>{statusName}</span>
                                <span className={cx('dropdown-icon')}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                            </div>
                            <ul className={cx('dropdown-list')}>
                                {status.map((status, index) => {
                                    return (
                                        <li
                                            className={cx('dropdown-item')}
                                            key={index}
                                            onClick={() => {
                                                setMangaList([]);
                                                setStatusName(status);
                                            }}
                                        >
                                            <span className={cx('dropdown-text')}>{status}</span>
                                        </li>
                                    );
                                })}
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
