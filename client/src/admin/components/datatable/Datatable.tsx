import classNames from "classnames/bind";
import styles from './datatable.module.scss'

import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../../../hooks/useFetch";
const cx = classNames.bind(styles)

interface DatatableProps {
  columns: GridColDef[];
}

interface RowData {
  _id: string;
  [key: string]: any;
}

const Datatable: React.FC<DatatableProps> = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState<RowData[]>([]);
  const { data } = useFetch<RowData[]>(`/${path}`);

  useEffect(() => {
    data && setList(data);
  }, [data]);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList((prevList) => prevList.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className={cx("cellAction")}>
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className={cx("viewButton")}>View</div>
          </Link>
          <div
            className={cx("deleteButton")}
            onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </div>
        </div>
      );
    },
  };

  return (
    <div className={cx("datatable")}>
      <div className={cx("datatableTitle")}>
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className={cx("datagrid")}
        rows={list}
        columns={columns.concat(actionColumn)}
        paginationModel={{ pageSize: 9, page: 0 }} // Updated for paginationModel
        pageSizeOptions={[9]} // Updated for pageSizeOptions
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
