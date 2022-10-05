import { useEffect, useState } from 'react';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

import User from './User';

function Users() {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const { path, url } = useRouteMatch();

    console.log(path, url);

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_ENDPOINT}/users`)
            .then(res => setUsers(res.data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h1>Users</h1>

            {loading && <div>Loading...</div>}

            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <NavLink to={`${url}/${user.id}`}>{user.name}</NavLink>
                        </li>
                    ))
                }
            </ul>


            <Switch>
                <Route exact path={path}>
                    <h3>Please Select a User</h3>
                </Route>
                <Route path={`${path}/:id`} component={User}>
                </Route>
            </Switch>
        </div>
    )
}

export default Users