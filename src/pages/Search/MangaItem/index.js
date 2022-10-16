import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './MangaItem.module.scss';

const cx = classNames.bind(styles);

function MangaItem({ manga }) {
    return (
        <Link to="/mangaDetail" className={cx('wrapper')}>
            <img src={manga.image} alt="manga" className={cx('background')} />
            <p>{manga.name}</p>
        </Link>
    );
}

export default MangaItem;
