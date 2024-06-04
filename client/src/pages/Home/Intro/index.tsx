import classNames from "classnames/bind";
import styles from './Intro.module.sass'
import Button from "../../../components/Button";
import ImageBox from "../../../components/ImageBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import config from "../../../config";

const cx = classNames.bind(styles)

function Intro() {
    return ( 
        <section className={cx('intro-area')}>
                <div className={cx('intro-content')}>
                    <p className={cx('title-large')}>Elevate your travel, <span className={cx('hlight-text')}>elevate your stay</span></p>
                    <p>Find the perfect accommodation for your vacation.</p>
                    <div className={cx('button-wrapper')}>
                        <Button secondary="true" to={config.routes.accommodation}>Book now</Button>
                        <Button primary="true" lefticon={<FontAwesomeIcon icon={faMapLocationDot} />}>Explore the world!</Button>
                    </div>
                </div>
                <div className={cx('intro-image')}>
                    <img className={cx('layer')} src="./assets/layer.png" alt="layer" />
                    <div className={cx('image-left')}>
                        <ImageBox radius square url="./assets/image2.jpg" />
                        <ImageBox radius square url="./assets/image3.jpg" />
                    </div>
                    <div className={cx('image-right')}>
                        <ImageBox radius rectangle url="./assets/image1.jpg" />
                    </div>
                </div>
            </section>
     );
}

export default Intro;