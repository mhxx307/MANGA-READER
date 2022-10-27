import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import React from 'react';
import style from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(style);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem data={item} key={index} />);
    };

    const fakeUserImg =
        'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg';

    return (
        <Tippy
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <Header title="Nguyễn Văn A" avatar={fakeUserImg} />
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            trigger="click"
            placement="bottom-end"
            animation={false}
            offset={[14, 10]}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
