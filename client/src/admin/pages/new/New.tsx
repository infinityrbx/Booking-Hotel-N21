import classNames from 'classnames/bind';
import styles from './New.module.scss';

import { useState, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
interface Input {
    id: string;
    label: string;
    type: string;
    placeholder?: string;
}

interface NewProps {
    inputs: Input[];
    title: string;
}

const New: React.FC<NewProps> = ({ inputs, title }) => {
    const [file, setFile] = useState<File | null>(null);
    const [info, setInfo] = useState<Record<string, string>>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setInfo((prev) => ({ ...prev, [id]: value }));
    };

    const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const data = new FormData();
        if (file) {
            data.append('file', file);
            data.append('upload_preset', 'upload');
            try {
                const uploadRes = await axios.post('https://api.cloudinary.com/v1_1/lamadev/image/upload', data);

                const { url } = uploadRes.data;

                const newUser = {
                    ...info,
                    img: url,
                };

                await axios.post('/auth/register', newUser);
            } catch (err) {
                console.log(err);
            }
        }
    };

    console.log(info);
    return (
        <div className={cx('wrapper')}>
            <div className="top">
                <h1>{title}</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img
                        src={
                            file
                                ? URL.createObjectURL(file)
                                : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                        }
                        alt=""
                    />
                </div>
                <div className="right">
                    <form>
                        <div className="formInput">
                            <label htmlFor="file">
                                Image: <FontAwesomeIcon icon={faUpload} />
                            </label>
                            <input
                                type="file"
                                id="file"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    if (e.target.files) setFile(e.target.files[0]);
                                }}
                                style={{ display: 'none' }}
                            />
                        </div>

                        {inputs.map((input) => (
                            <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input
                                    onChange={handleChange}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    id={input.id}
                                />
                            </div>
                        ))}
                        <button onClick={handleClick}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default New;
