import classNames from "classnames/bind";
import styles from './newRoom.module.scss'
const cx = classNames.bind(styles)

import { useState, ChangeEvent, MouseEvent } from "react";
import { roomInputs } from "../../formSource";
import axios from "axios";
import useFetch from "../../../hooks/useFetch";

interface RoomInput {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

interface Hotel {
  _id: string;
  name: string;
}

interface NewRoomProps {}

const NewRoom: React.FC<NewRoomProps> = () => {
  const [info, setInfo] = useState<Record<string, any>>({});
  const [hotelId, setHotelId] = useState<string | undefined>(undefined);
  const [rooms, setRooms] = useState<string>("");

  const { data, loading } = useFetch<Hotel[]>("/hotels");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room.trim() }));
    try {
      await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={cx("new")}>
      <div className={cx("newContainer")}>
        <div className={cx("top")}>
          <h1>Add New Room</h1>
        </div>
        <div className={cx("bottom")}>
          <div className="right">
            <form>
              {roomInputs.map((input: RoomInput) => (
                <div className={cx("formInput")} key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className={cx("formInput")}>
                <label>Rooms</label>
                <textarea
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setRooms(e.target.value)}
                  placeholder="give comma between room numbers."
                />
              </div>
              <div className={cx("formInput")}>
                <label>Choose a hotel</label>
                <select
                  id="hotelId"
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
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

export default NewRoom;
