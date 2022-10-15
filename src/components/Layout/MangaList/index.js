import classNames from 'classnames/bind';
import { MangaItem } from '../components';
import styles from './MangaList.module.scss';
import grid from '~/assets/css/grid.scss';

const cc = classNames.bind(grid);
const cx = classNames.bind(styles);

function MangaList() {
    return (
        <div className={cx('wrapper')}>
            <div className={cc('grid wide')}>
                <div className={(cx('manga-list'), cc('row'))}>
                    <div className={cc('col c-2')}>
                        <MangaItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MangaList;
