import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes';
import styles from './MangaInfoItem.module.scss';
import { FollowIcon, HeartIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function MangaInfoItem({ manga, attrs, color }) {
    return (
        <Link
            to={routesConfig.mangaDetail}
            className={cx('manga-info')}
            tabIndex="-1"
            {...attrs}
            style={{
                backgroundImage: `url(${manga.image})`,
            }}
        >
            <h2 className={cx('title')} style={{ color: color }}>
                {manga.name}
            </h2>

            <p className={cx('description')}>{manga.description}</p>

            <p className={cx('categories')} style={{ color: color }}>
                {manga.categories}
            </p>

            <div className={cx('stat')}>
                <div className={cx('follow')}>
                    <span className={cx('follow-icon')}>
                        <FollowIcon />
                    </span>
                    <span className={cx('follow-text')}>{manga.follow}</span>
                </div>

                <div className={cx('view')}>
                    <span className={cx('view-icon')}>
                        <HeartIcon />
                    </span>
                    <span className={cx('view-text')}>{manga.view}</span>
                </div>
            </div>
        </Link>
    );
}

export default MangaInfoItem;
