import classNames from 'classnames/bind';
import styles from './MangaList.module.scss';
import grid from '~/assets/css/grid.scss';
import { useContext } from 'react';
import Context from '~/stores/Context';
import MangaItem from '../MangaItem';
import Tippy from '@tippyjs/react';

const cc = classNames.bind(grid);
const cx = classNames.bind(styles);

function MangaList() {
    const { mangaList } = useContext(Context);
    console.log(mangaList);

    return (
        <div className={cx('wrapper')}>
            <div className={cc('grid wide')}>
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
