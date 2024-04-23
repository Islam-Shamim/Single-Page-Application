import PropTypes from 'prop-types'
import './User.css'
import { Link, useNavigate } from 'react-router-dom';
const User = ({user}) => {
    // console.log(user)
    const navigate = useNavigate();
    const {id,phone,website} = user;

    const handleDetails = () =>{
        navigate(`/user/${id}`)
    }

    return (
        <div className='user'>
            <h2>ID : {id}</h2>
            <p>Phone No : {phone}</p>
            <p>Website : <span>{website}</span></p>
            <Link to={`/user/${id}`}><button>See Details</button></Link><br />
            <Link to={`/user/${id}`}><button onClick={handleDetails}>Click to show details</button></Link>
        </div>
    );
};

User.propTypes = {
    user : PropTypes.object
}

export default User;