import { Link, useNavigate } from "react-router-dom";
import './User.css'

const User = ({user}) => {
    const {id, name, email} = user;
    const navigate = useNavigate();

    const handlBtn = ()=>{
        navigate(`/react-simple/user/${id}`)
    }

    return (
        <div className="user-box">
            <h3>{name}</h3>
            <h4>{email}</h4>
            {/* <Link to={`/user/${id}`}>Show details</Link> */}
            <button onClick={()=> handlBtn()} type="button">Details</button>
        </div>
    );
};

export default User;