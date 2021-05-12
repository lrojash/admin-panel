import React, { useState, useEffect } from 'react';
import { useHistory, Switch, Route, withRouter } from 'react-router-dom';
//Pages
import SignIn from '../Pages/SignIn';
import Main from '../Pages/Main';
import AddUser from '../Pages/AddUser';
import DeleteUser from '../Pages/DeleteUser';
import ModifyUser from '../Pages/ModifyUser';
import GetUsers from '../Pages/GetUsers';
import AssignGroups from '../Pages/AssignGroups';
import AddCourses from '../Pages/AddCourses';

import ProtectedRoute from './ProtectedRoute';
import { __CheckSession } from '../services/UserServices';


const Router = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);
    let history = useHistory();

    // verify if the current token is valid 

    const verifyTokenValid = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const session = await __CheckSession();
                console.log('after session: ', session);
                setCurrentUser(session);
                setAuthenticated(true);
                history.push('/main');
            } catch (error) {
                setCurrentUser(null)
                setAuthenticated(false);
                localStorage.clear();
            }
        }
    }

    const toggleAuthenticated = async (value, user, done) => {
        setAuthenticated(value);
        setCurrentUser(user);
        done();
    }

    useEffect(() => {
        // verifyTokenValid();
        setPageLoading(false);
    })

    return (
        <div className="main">
            {pageLoading ? (
                <h3>Loading...</h3>
            ) : (
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => (
                            <SignIn
                                toggleAuthenticated={toggleAuthenticated}
                                {...props}
                            />
                        )}
                    />
                    <ProtectedRoute
                        authenticated={authenticated}
                        path="/main"
                        component={(props) => (
                            <Main {...props} currentUser={currentUser} />
                        )}
                    />
                    <ProtectedRoute
                        authenticated={authenticated}
                        path="/add-users"
                        component={(props) => (
                            <AddUser {...props} currentUser={currentUser} />
                        )}
                    />
                    <ProtectedRoute
                        authenticated={authenticated}
                        path="/remove-users"
                        component={(props) => (
                            <DeleteUser {...props} currentUser={currentUser} />
                        )}
                    />
                    <ProtectedRoute
                        authenticated={authenticated}
                        path="/modify-users"
                        component={(props) => (
                            <ModifyUser {...props} currentUser={currentUser} />
                        )}
                    />
                    <ProtectedRoute
                        authenticated={authenticated}
                        path="/get-all"
                        component={(props) => (
                            <GetUsers {...props} currentUser={currentUser} />
                        )}
                    />
                    <ProtectedRoute
                        authenticated={authenticated}
                        path="/assign-group"
                        component={(props) => (
                            <AssignGroups {...props} currentUser={currentUser} />
                        )}
                    />
                    <ProtectedRoute
                        authenticated={authenticated}
                        path="/add-courses"
                        component={(props) => (
                            <AddCourses {...props} currentUser={currentUser} />
                        )}
                    />
                </Switch>
            )}
        </div>
    )
}

export default withRouter(Router);