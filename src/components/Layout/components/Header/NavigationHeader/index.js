import classNames from 'classnames/bind';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationHeader.module.scss';

const cx = classNames.bind(styles);

function NavigationHeader() {
    const activeStyle = ({ isActive }) => {
        return {
            color: isActive ? 'var(--primary-color)' : 'var(--white-blur-color)',
        };
    };

    return (
        <div className={cx('nav-list')}>
            <NavLink end to="/" className={cx('nav-item')} style={activeStyle}>
                Manga
            </NavLink>
            <NavLink to="/anime" className={cx('nav-item')} style={activeStyle}>
                Anime
            </NavLink>
            <NavLink to="/lightNovel" className={cx('nav-item')} style={activeStyle}>
                Light novel
            </NavLink>
        </div>
    );
}

export default NavigationHeader;
