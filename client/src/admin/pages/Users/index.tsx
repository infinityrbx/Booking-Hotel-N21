import classNames from "classnames/bind";
import styles from './Users.module.sass'
import List from "../list/List";
import { userColumns } from "../../datatablesource";

const cx = classNames.bind(styles)

function Users() {
    return ( 
        <div className={cx('wrapper')}>
            <h2>Users</h2>
            <List columns={userColumns} />
            {/* <Single />
            <New inputs={userInputs} title="Add New User" /> */}
        </div>
     );
}

export default Users;