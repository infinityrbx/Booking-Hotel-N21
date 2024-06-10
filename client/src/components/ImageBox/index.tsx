import classNames from "classnames/bind";
import styles from './ImageBox.module.sass'

const cx = classNames.bind(styles)

type Props = {
    radius? : boolean
    rounded? : boolean
    square? : boolean
    smallSquare? : boolean
    rectangle? : boolean
    url : string
}

function ImageBox({ radius, rounded, square, smallSquare, rectangle, url } : Props) {

    const classes = cx( 'wrapper',
        {
            'radius' : radius,
            'rounded' : rounded,
            'square' : square,
            'small-square' : smallSquare,
            'rectangle' : rectangle
        }
    )

    return ( 
        <div className={classes}><img src={url} alt="image-review" /></div>
     );
}

export default ImageBox;