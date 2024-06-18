import classNames from "classnames/bind";
import styles from './newHotel.module.scss'


import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, ChangeEvent, MouseEvent } from "react";
import { hotelInputs } from "../../formSource"; 
import axios from "axios";
import useFetch from "../../../hooks/useFetch";

const cx = classNames.bind(styles)
interface Room {
  _id: string;
  title: string;
}

interface NewHotelProps {}

const NewHotel: React.FC<NewHotelProps> = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [info, setInfo] = useState<Record<string, any>>({});
  const [rooms, setRooms] = useState<string[]>([]);

  const { data, loading } = useFetch<Room[]>("/rooms");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setRooms(value);
  };

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (files) {
        const list = await Promise.all(
          Array.from(files).map(async (file) => {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "upload");
            const uploadRes = await axios.post(
              "https://api.cloudinary.com/v1_1/lamadev/image/upload",
              data
            );

            const { url } = uploadRes.data;
            return url;
          })
        );

        const newHotel = {
          ...info,
          rooms,
          photos: list,
        };

        await axios.post("/hotels", newHotel);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={cx("new")}>
      <div className={cx("newContainer")}>
        <div className={cx("top")}>
          <h1>Add New Product</h1>
        </div>
        <div className={cx("bottom")}>
          <div className={cx("left")}>
            <img
              src={
                files && files[0]
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className={cx("right")}>
            <form>
              <div className={cx("formInput")}>
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className={cx("icon")} />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className={cx("formInput")}>
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
              <div className={cx("selectRooms")}>
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
