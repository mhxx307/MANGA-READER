import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './MangaList.module.scss';
import grid from '~/assets/css/grid.scss';
import MangaItem from '../MangaItem';
import { sorts } from '~/stores/DropdownData';
import Context from '~/stores/Context';
import Skeleton from '~/components/Skeleton/Skeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import randomColor from 'randomcolor';

import { FilterIcon } from '~/components/Icons';
import MangaInfoItem from '../MangaInfoItem';

const cc = classNames.bind(grid);
const cx = classNames.bind(styles);

function MangaList() {
    const { mangaList, setMangaList, sortName, setSortName, isLoading } = useContext(Context);
    console.log(mangaList);

    // const {manga, setManga} = useState({});

    const [visible, setVisible] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cc('grid wide')}>
                <div className={cx('filter')} onClick={() => setVisible(!visible)}>
                    <Tippy
                        interactive={true}
                        appendTo={() => document.body}
                        visible={visible}
                        placement="bottom"
                        trigger="click"
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
                                <FilterIcon />
                            </span>
                            <span>{sortName}</span>
                        </div>
                    </Tippy>
                </div>

                <InfiniteScroll
                    style={{ overflowX: 'hidden' }}
                    dataLength={mangaList.length}
                    hasMore={isLoading}
                    loader={
                        <div className={cc('row')}>
                            <Skeleton type="feed" />
                        </div>
                    }
                >
                    <div className={cc('row')}>
                        {mangaList.map((manga, index) => {
                            var color = randomColor({
                                luminosity: 'bright',
                                format: 'rgb',
                            });
                            return (
                                <Tippy
                                    interactive={false}
                                    placement="right"
                                    key={index}
                                    render={(attrs) => (
                                        <MangaInfoItem manga={manga} attrs={attrs} color={color} />
                                    )}
                                >
                                    <div className={cc('col c-2')} style={{ marginBottom: '20px' }}>
                                        <MangaItem manga={manga} color={color} />
                                    </div>
                                </Tippy>
                            );
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default MangaList;
