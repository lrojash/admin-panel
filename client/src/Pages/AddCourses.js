import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import states from '../helpers/States'

// services
import {__RegisterUser} from '../services/UserServices'


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
    }
}))


const AddCourses = () => {
    const classes = useStyles();
    // states that are going to be used
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    // handle functions
    const handleChange = (e) => {
        e.preventDefault();

        // console.log('outside switch: ', console.log(e.target.value));
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
                setState(e.target.value);
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = { firstName, lastName, username, state, city };
        // console.log('button pressed')
        // console.log("current state: ", state)
        try {
            const loginData = __RegisterUser(formData);

        } catch(error) {
            throw error 
        }
    }

    return (
        <div>
            <h1>Add Courses</h1>
        </div>
    )
}

export default AddCourses;