import classNames from "classnames/bind";
import styles from './Booking.module.sass'
import ImageSlider from "./ImageSlider";

const cx = classNames.bind(styles)

const slides = [
    'https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/ee7392d7_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640',
    "https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/be9a9994_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
    "https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/30000000/29370000/29367600/29367557/0a083a4f_z.jpg?_src=imagekit&tr=c-at_max,h-360,q-40,w-640",
]

function Booking() {
    return (
        <div className={cx('wrapper')}>
            <h2>Booking</h2>
            <ImageSlider slides={slides} />
        </div>
    );
}

export default Booking;