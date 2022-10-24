import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
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
    const { mangaList, sortName, setSortName } = useContext(Context);
    console.log(mangaList);

    const { visible, setVisible } = useState(false);

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
                                            onClick={() => setSortName(sort)}
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
                            <Tippy content="hello" placement="right" key={index}>
                                <div className={cc('col c-2')} style={{ marginBottom: '20px' }}>
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
