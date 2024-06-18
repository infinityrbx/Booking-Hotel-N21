import classNames from "classnames/bind";
import styles from './list.module.scss'

const cx = classNames.bind(styles)
import Datatable from "../../components/datatable/Datatable"

const List = ({columns} : any) => {
  return (
    <div className={cx("list")}>
      <div className="listContainer">
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List