import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { __GetAllUsers } from '../services/UserServices';

// services


const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid red',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
    },
}))


const GetUsers = () => {
    const classes = useStyles();
    // states that are going to be used
    const [users, setUsers] = useState([]);

    // load users
    useEffect(async () => {
        // console.log('loads first: ');
        try {
            const data = await __GetAllUsers();
            setUsers(data);
        } catch (error) {
            throw error
        }
    }, []);

    return (
        <div className={classes.root}>
            <h1>All Users</h1>
            <div style={{color: 'black'}}>
                {console.log('users: ', users)}
                {users.map(user => (
                    <h3>{user.firstName} {user.lastName}, {user.role}, {user.city}, {user.state}</h3>
                ))}
            </div>
        </div>
    )
}

export default GetUsers;