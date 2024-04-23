import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate = useNavigate();
    const details = useLoaderData();
    const {name,email} = details;

    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <p>Name : <b>{name}</b></p>
            <p>Email : {email}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;