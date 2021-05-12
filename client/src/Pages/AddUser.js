import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import states from '../helpers/States'

// services
import { __RegisterUser } from '../services/UserServices'


const useStyles = makeStyles((theme) => ({
    root: {
        ' & .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
            display: 'flex',
            // border: '1px solid red',
            margin: '2rem',
        }
    },
    main: {
        // border: '1px solid green',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '75vh',
    },
    input: {
        margin: '1rem',
    },
    select: {
        width: '30vw',
        height: '5vh',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'green',
        margin: '2rem',
        display: 'block',
    }
}))


const AddUser = (props) => {
    const classes = useStyles();
    // states that are going to be used
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');

    // handle functions
    const handleChange = (e) => {
        e.preventDefault();

        console.log('outside switch: ', console.log(e));
        switch (e.target.id) {
            case "firstName":
                setFirstName(e.target.value);
                break;
            case "lastName":
                setLastName(e.target.value);
                break;
            case "username":
                setUsername(e.target.value);
                break;
            case "city":
                setCity(e.target.value);
            case "password":
                setPassword(e.target.value);
            default:
                break;
        }
    }
    const handleChangeState = (e) => {
        e.preventDefault();
        setState(e.target.value);
    }
    const handleChangeRole = (e) => {
        e.preventDefault();
        setRole(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = { firstName, lastName, username, state, city, role, password };
        // console.log('button pressed')
        // console.log("current state: ", state)
        try {
            await __RegisterUser(formData);
            alert(`Added User ${firstName} ${lastName}.`)
            props.history.push('/main');
        } catch (error) {
            throw error
        }
    }

    return (
        <div className={classes.main}>
            <h1>Add User</h1>
            <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                {console.log('this is the state: ', { firstName, lastName, username, state, city, role, password })}
                <div>
                    <TextField id="firstName" label="First Name" onChange={handleChange} />
                    <TextField id="lastName" label="Last Name" onChange={handleChange} />
                    <TextField id="username" label="Username" onChange={handleChange} />
                    <TextField id="city" label="City" onChange={handleChange} />
                    <TextField id="password" label="Password" onChange={handleChange} />
                    <InputLabel id="select-state" className={classes.input}>State</InputLabel>
                    <Select
                        id="state"
                        value={state}
                        onChange={handleChangeState}
                        className={classes.select}
                        labelId="select-state"
                    >
                        {states.map((stateName) => (
                            <MenuItem key={stateName.value} value={stateName.value}>
                                {stateName.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <InputLabel id="select-role" className={classes.input}>Role</InputLabel>
                    <Select
                        labelId="select-role"
                        id="role"
                        value={role}
                        onChange={handleChangeRole}
                        className={classes.select}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'ADMIN'}>ADMIN</MenuItem>
                        <MenuItem value={'INSTRUCTOR'}>INSTRUCTOR</MenuItem>
                        <MenuItem value={'STUDENT'}>STUDENT</MenuItem>
                    </Select>
                    {/* <TextField id="standard-basic" label="First Name" />
                <TextField id="standard-basic" label="First Name" />
                <TextField id="standard-basic" label="First Name" />
                <TextField id="standard-basic" label="" */}
                </div>
                <Button type="submit" className={classes.submit}>Submit</Button>
            </form>

        </div>
    )
}

export default AddUser;