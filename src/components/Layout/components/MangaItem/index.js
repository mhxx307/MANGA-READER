import classNames from 'classnames/bind';
import styles from './MangaItem.module.scss';

const cx = classNames.bind(styles);

function MangaItem({ manga }) {
    return (
        <a href="/" className={cx('wrapper')}>
            <img src={manga.image} alt="manga" className={cx('background')} />
            <p>{manga.name}</p>
        </a>
    );
}

export default MangaItem;
