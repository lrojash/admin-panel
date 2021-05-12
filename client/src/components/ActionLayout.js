import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gridTemplateRows: 'auto auto auto',
        listStyleType: 'none',
        columnGap: '20%',
        rowGap: '20%',
        marginTop: '5rem',
    },
    listeItem: {

        height: '5rem',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 'x-large',
        background: 'rgba(192,192,192,0.75)',
        boxShadow: '10px 5px 5px grey',
        cursor: 'pointer'
    }
}))

const ActionLayout = (props) => {
    const classes = useStyles();
    let history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        switch (e.target.id) {
            case "addUser":
                props.history.push('/add-users');
                break;
            case "deleteUser":
                history.push('/remove-users');
                break;
            case "modifyUser":
                history.push('/modify-users');
                break;
            case "getUsers":
                history.push('/get-all');
                break;
            case "assignGroup":
                history.push('/assign-groups');
                break;
            case "addCourses":
                history.push('/add-courses');
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <ul className={classes.root}>
                <li id="addUser" className={classes.listeItem} onClick={handleClick}>Add Users</li>
                <li id="deleteUser" className={classes.listeItem} onClick={handleClick}>Delete Users</li>
                <li id="modifyUser" className={classes.listeItem} onClick={handleClick}>Modify Users</li>
                <li id="getUsers" className={classes.listeItem} onClick={handleClick}>Get Users</li>
                <li id="assignGroup" className={classes.listeItem} onClick={handleClick}>Assign Groups</li>
                <li id="addCourses" className={classes.listeItem} onClick={handleClick}>Add Courses</li>
            </ul>
        </div>
    )
}

export default ActionLayout;