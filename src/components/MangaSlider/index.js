import React, { useState, useContext } from 'react';
import classNames from 'classnames/bind';
// import SwiperSlide
import { Swiper, SwiperSlide } from 'swiper/react';

import Context from '~/stores/Context';
import Image from '~/components/Image';
import styles from './MangaSlider.scss';
import { Navigation, Thumbs } from 'swiper';

const cx = classNames.bind(styles);

const ManipulatingSwiper = () => {
    const [activeThumb, setActiveThumb] = useState();
    const { popularMangaList } = useContext(Context);

    return (
        <>
            <Swiper
                speed={400}
                loop={false}
                navigation={true}
                noSwipingClass="swiper-slide"
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: activeThumb }}
                className={cx('manga-image-slider')}
                observer={true}
                observeParents={true}
                parallax={true}
            >
                {popularMangaList.map((manga, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={cx('overlay')}></div>
                            <div className={cx('banner-overlay-down')}></div>
                            <Image src={manga.image} alt={manga.name} className={cx('image')} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <Swiper
                onSwiper={setActiveThumb}
                speed={400}
                spaceBetween={10}
                loop={false}
                slidesPerView={9}
                // slidesPerView="auto"
                grabCursor={true}
                modules={[Navigation, Thumbs]}
                className={cx('manga-image-slider-thumbs')}
            >
                {popularMangaList.map((manga, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={cx('manga-image-slider-thumbs-wrapper')}>
                                <Image src={manga.image} alt={manga.name} className={cx('image')} />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default ManipulatingSwiper;
