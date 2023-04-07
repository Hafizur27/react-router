import React from 'react';
import './User.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, id , email, username, phone} = user;
    return (
        <div className='user'>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <p>{username}</p>
            <small>{phone}</small>
            <p><Link to={`/user/${id}`}>user details</Link></p>
        </div>
    );
};

export default User;