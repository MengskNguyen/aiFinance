import Proptypes from 'prop-types';
import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    small = false,
    large = false,
    disabled = false,
    rounded = false,
    leftIcon,
    rightIcon,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when disabled

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        disabled,
        primary,
        outline,
        rounded,
        small,
        large,
        text,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

// Prop can't be undefined
Button.propTypes = {
    children: propTypes.node.isRequired,
    to: Proptypes.string,
    href: Proptypes.string,
    primary: Proptypes.bool,
    outline: Proptypes.bool,
    text: Proptypes.bool,
    small: Proptypes.bool,
    large: Proptypes.bool,
    disabled: Proptypes.string,
    rounded: Proptypes.string,
    leftIcon: Proptypes.node,
    rightIcon: Proptypes.node,
    className: Proptypes.string,
    onClick: Proptypes.func,
};

export default Button;
