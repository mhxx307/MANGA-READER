import classNames from 'classnames/bind';
import styles from './MangaItem.module.scss';

const cx = classNames.bind(styles);
const url =
    'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-82gwrvQV6OBc.png';

function MangaItem() {
    return (
        <a href="/" className={cx('wrapper')}>
            <img src={url} alt="manga" className={cx('background')} />
            <p>Chainsaw Main</p>
        </a>
    );
}

export default MangaItem;
