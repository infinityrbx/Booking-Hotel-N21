import classNames from "classnames/bind";
import styles from './TextField.module.sass'

const cx = classNames.bind(styles)

type TextFieldProps = {
    placeholder : string,
    type : string
    onChange : (e:any) => void
    value : string
}

function TextField({ placeholder, type, onChange, value } : TextFieldProps) {
    return ( 
        <input className={cx('wrapper')} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
     );
}

export default TextField;