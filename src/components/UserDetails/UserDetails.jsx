import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();

    const handleBack = ()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Details about user</h2>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
            <button onClick={handleBack} type="button">Go Back</button>
        </div>
    );
};

export default UserDetails;