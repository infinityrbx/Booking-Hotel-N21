import classNames from "classnames/bind";
import styles from './ImageBox.module.sass'

const cx = classNames.bind(styles)

type Props = {
    radius? : boolean
    rounded? : boolean
    square? : boolean
    rectangle? : boolean
    url : string
}

function ImageBox({ radius, rounded, square, rectangle, url } : Props) {

    const classes = cx( 'wrapper',
        {
            'radius' : radius,
            'rounded' : rounded,
            'square' : square,
            'rectangle' : rectangle
        }
    )

    return ( 
        <div className={classes}><img src={url} alt="image-review" /></div>
     );
}

export default ImageBox;