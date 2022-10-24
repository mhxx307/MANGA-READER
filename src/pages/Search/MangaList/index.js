import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFilter, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './MangaList.module.scss';
import grid from '~/assets/css/grid.scss';
import MangaItem from '../MangaItem';
import { sorts } from '~/stores/DropdownData';
import Context from '~/stores/Context';

const cc = classNames.bind(grid);
const cx = classNames.bind(styles);

function MangaList() {
    const { mangaList, setMangaList, sortName, setSortName } = useContext(Context);
    console.log(mangaList);

    const { visible, setVisible } = useState(false);
    const { mangaInfoVisible, setMangaInfoVisible } = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cc('grid wide')}>
                <div className={cx('filter')} onClick={() => setVisible(!visible)}>
                    <Tippy
                        interactive={true}
                        visible={visible}
                        placement="bottom"
                        render={(attrs) => (
                            <div className={cx('select')} tabIndex="-1" {...attrs}>
                                {sorts.map((sort, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={cx('option')}
                                            onClick={() => {
                                                setMangaList([]);
                                                setSortName(sort);
                                            }}
                                        >
                                            {sort}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    >
                        <div className={cx('filter-wrap')}>
                            <span className={cx('filter-icon')}>
                                <FontAwesomeIcon icon={faFilter} />
                            </span>
                            <span>{sortName}</span>
                        </div>
                    </Tippy>
                </div>
                <div className={cc('row')}>
                    {mangaList.map((manga, index) => {
                        return (
                            <Tippy
                                interactive={false}
                                visible={mangaInfoVisible}
                                placement="right"
                                key={index}
                                render={(attrs) => (
                                    <div
                                        className={cx('manga-info')}
                                        tabIndex="-1"
                                        {...attrs}
                                        style={{
                                            backgroundImage: `url(${manga.image})`,
                                        }}
                                    >
                                        <h2 className={cx('title')}>{manga.name}</h2>
                                        <p className={cx('description')}>{manga.description}</p>
                                        <p className={cx('categories')}>{manga.categories}</p>
                                        <div className={cx('stat')}>
                                            <div className={cx('follow')}>
                                                <span className={cx('follow-icon')}>
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </span>
                                                <span className={cx('follow-text')}>
                                                    {manga.follow}
                                                </span>
                                            </div>

                                            <div className={cx('view')}>
                                                <span className={cx('view-icon')}>
                                                    <FontAwesomeIcon icon={faEye} />
                                                </span>
                                                <span className={cx('view-text')}>
                                                    {manga.view}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            >
                                <div
                                    className={cc('col c-2')}
                                    style={{ marginBottom: '20px' }}
                                    onClick={() => setMangaInfoVisible(!mangaInfoVisible)}
                                >
                                    <MangaItem manga={manga} />
                                </div>
                            </Tippy>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default MangaList;
