import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchBar from "material-ui-search-bar";
import { __SearchUser } from '../services/UserServices';
import ModifyModal from '../components/ModifyModal'

// services
import { __ModifyUser } from '../services/UserServices'


const useStyles = makeStyles((theme) => ({
    root: {
        ' & .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'green',
    },
    search: {
        length: '40vw',
    },
    userInfo: {
        textAlign: 'center',
    }
}))


const ModifyUser = (props) => {
    const classes = useStyles();

    const [searched, setSearched] = useState('');
    const [user, setUser] = useState('');

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
            <h1 style={{ textAlign: 'center' }}>Modify User</h1>
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
                // <form className={classes.userInfo} onSubmit={handleSubmit}>
                //     <h1>Name: {user.data.firstName} {user.data.lastName}</h1>
                //     <h1>Id: {user.data.id}</h1>
                //     <h1>Role: {user.data.role}</h1>
                //     <h1>Location: {user.data.city}, {user.data.state}</h1>
                //     <Button type="submit" className={classes.submit}>Modify</Button>
                // </form>
                <ModifyModal {...props} user={user}/>
            ) : (<p></p>)
            }
        </div>
    )
}

export default ModifyUser;