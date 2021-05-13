import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import states from '../helpers/States'
import { __ModifyUser } from '../services/UserServices';


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


const ModifyForm = (props) => {
    const classes = useStyles();
    //states that will be modified
    const [firstName, setFirstName] = useState(props.user.data.firstName);
    const [lastName, setLastName] = useState(props.user.data.lastName);
    const [username, setUsername] = useState(props.user.data.username);
    const [state, setState] = useState(props.user.data.state);
    const [city, setCity] = useState(props.user.data.city);
    const [role, setRole] = useState(props.user.data.role);

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
        let formData = { firstName, lastName, username, state, city, role };
        try {
            const res = await __ModifyUser(formData);
            // console.log('this is the current response from api: ', res);
            alert(res.message);
            props.history.push('/main');
        } catch (error) {
            throw error
        }
    }

    return (
        <div>
            <h1>Modify Form</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="firstName" defaultValue={props.user.data.firstName} label="First Name" onChange={handleChange} />
                <TextField id="lastName" defaultValue={props.user.data.lastName} label="Last Name" onChange={handleChange} />
                <TextField id="username" defaultValue={props.user.data.username} label="Username" onChange={handleChange} />
                <TextField id="city" defaultValue={props.user.data.city} label="City" onChange={handleChange} />
                <Select
                    id="state"
                    value={state}
                    onChange={handleChangeState}
                    className={classes.select}
                    labelId="select-state"
                    defaultValue={props.user.data.state}
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
                    defaultValue={props.user.data.role}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'ADMIN'}>ADMIN</MenuItem>
                    <MenuItem value={'INSTRUCTOR'}>INSTRUCTOR</MenuItem>
                    <MenuItem value={'STUDENT'}>STUDENT</MenuItem>
                </Select>
                <Button type="submit">Submit</Button>
            </form>

        </div>
    )
}

export default ModifyForm;