import React from 'react';
import {userDispatch} from 'react-redux';

const User =(props)=>{
    const dispatch=userDispatch();
    return (
        <div key={props.user.id}>
            <img src={props.user.image} alt={props.user.firstName}/>
            <h1>{props.user.lastName}{props.user.firstName}</h1>
            <button onClick={()=>dispatch()}>DetailUser</button>
            <button onClick={()=>dispatch()}>Lists de posts</button>
        </div>
    )
};
export default User;