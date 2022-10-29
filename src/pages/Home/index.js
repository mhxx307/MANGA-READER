import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ManipulatingSwiper from '~/components/MangaSlider';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <ManipulatingSwiper />
        </div>
    );
}

export default Home;
