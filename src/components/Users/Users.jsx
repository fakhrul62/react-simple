import { useLoaderData } from "react-router-dom";
import './Users.css'
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Our total Users: {users.length}</h2>
            <div className="users-box">
            {
                users.map((user, idx)=><User key={idx} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;