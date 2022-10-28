import classNames from 'classnames/bind';
import React from 'react';
import Image from '~/components/Image';
import style from './Menu.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(style);

function Header({ title, avatar }) {
    return (
        <header className={cx('header')}>
            <Image
                src={avatar || images.avatarDefault}
                alt="avatar"
                className={cx('avatar')}
                fallback={images.avatarDefault}
            />
            <h3 className={cx('title')}>{title}</h3>
        </header>
    );
}

export default Header;
