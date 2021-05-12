import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchBar from "material-ui-search-bar";
import { __DeleteUser, __SearchUser } from '../services/UserServices';


// services
import { __RegisterUser } from '../services/UserServices'


const useStyles = makeStyles((theme) => ({
    root: {
        ' & .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'red',
    },
    search: {
        length: '40vw',
    },
    userInfo: {
        textAlign: 'center',
    }
}))


const DeleteUser = (props) => {
    const classes = useStyles();

    const [searched, setSearched] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = {id: user.data.id}
        console.log('id: ', id);
        try {
            const deleteUser = await __DeleteUser(id);
            console.log('afater delete: ', deleteUser);
            alert(deleteUser.message);
            props.history.push('/main');
        } catch(error) {
            throw error 
        }
    }

    const requestSearch = (searchValue) => {
        setSearched(searchValue);
    }

    const cancelSearch = () => {
        setSearched('');
        requestSearch(searched);
    }
    const submitSearch = async () => {
        console.log('before sending: ', searched)
        let data = { username: searched }
        try {
            const searchedUser = await __SearchUser(data);
            if (!searchedUser) {
                return false
            }
            setUser(searchedUser);
            console.log('user: ', searchedUser)
        } catch (error) {
            throw error
        }
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Delete User</h1>
            <SearchBar
                value={searched}
                onChange={(searchValue) => requestSearch(searchValue)}
                onCancelSearch={() => cancelSearch()}
                onRequestSearch={submitSearch}
                placeholder="Search User"
                className={classes.search}
            />
            {console.log('searched user: ', user)}
            {user ? (
                <form className={classes.userInfo} onSubmit={handleSubmit}>
                    <h1>Name: {user.data.firstName} {user.data.lastName}</h1>
                    <h1>Id: {user.data.id}</h1>
                    <h1>Role: {user.data.role}</h1>
                    <h1>Location: {user.data.city}, {user.data.state}</h1>
                    <Button type="submit" className={classes.submit}>Delete</Button>
                </form>

            ) : (<p></p>)
            }
            {/* <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                {console.log('this is the state: ', { firstName, lastName, username, state, city })}
                <div>
                    <TextField id="firstName" label="First Name" onChange={handleChange} />
                    <TextField id="lastName" label="Last Name" onChange={handleChange} />
                    <TextField id="username" label="Username" onChange={handleChange} />
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                        id="state-select"
                        value={state}
                        onChange={handleChange}
                    >
                        {states.map((stateName) => (
                            <MenuItem key={stateName.value} value={stateName.value}>
                                {stateName.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField id="city" label="city" onChange={handleChange} /> */}
            {/* <TextField id="standard-basic" label="First Name" />
                <TextField id="standard-basic" label="First Name" />
                <TextField id="standard-basic" label="First Name" />
                <TextField id="standard-basic" label="" */}
            {/* </div>
                <Button type="submit" className={classes.submit}>Submit</Button>
            </form> */}

        </div>
    )
}

export default DeleteUser;