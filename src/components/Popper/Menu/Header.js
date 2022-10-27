import classNames from 'classnames/bind';
import React from 'react';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function Header({ title, avatar }) {
    return (
        <header className={cx('header')}>
            <img src={avatar} alt="avatar" className={cx('avatar')} />
            <h3 className={cx('title')}>{title}</h3>
        </header>
    );
}

export default Header;
