import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({ children, to, href, onClick, primary = false, ...passProps }) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        primary,
    });

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
