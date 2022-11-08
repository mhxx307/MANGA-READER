import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './MangaItem.module.scss';
import images from '~/assets/images';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function MangaItem({ manga, color }) {
    return (
        <Link to={routesConfig.mangaDetail} className={cx('wrapper')}>
            <Image
                src={manga.image}
                alt="manga"
                className={cx('background')}
                fallback={images.sorry}
            />
            <p className={cx('name')} style={{ color: color }}>
                {manga.name}
            </p>
        </Link>
    );
}

export default MangaItem;
