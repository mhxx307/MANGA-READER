import classNames from 'classnames/bind';
import React from 'react';
import style from './Skeleton.scss';
import grid from '~/assets/css/grid.scss';

const cx = classNames.bind(style);
const cc = classNames.bind(grid);

function Skeleton({ type }) {
    const COUNTER = 12;
    const FeedSkeleton = () => (
        <div className={cc('col c-2')}>
            <div className={cx('postSk')}>
                <div className={cx('postSkImg')}></div>
                <div className={cx('postSkInfo')}></div>
            </div>
        </div>
    );
    if (type === 'feed') return Array(COUNTER).fill(<FeedSkeleton />);
}

export default Skeleton;
