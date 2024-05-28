import classNames from 'classnames/bind'
import styles from './Button.module.sass'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

type ButtonProps = {
    children? : ReactNode
    lefticon? : ReactNode
    to? : string
    primary? : string
    secondary? : string
    disabled? : string
    onClick? : () => void
}


function Button({ primary, secondary, disabled,lefticon, children, to, onClick} : ButtonProps) {

    const props = {primary, secondary, to, onClick}
    
    let Comp: React.ElementType = 'button';
    
    const classes = cx('button', {
        primary: primary,
        secondary: secondary,
        disabled: disabled
    })

    if (to) {
        Comp = Link;
    }

    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    )
}

export default Button;