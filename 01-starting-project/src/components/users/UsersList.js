import React from 'react';
import './UsersList.css';
import Card from '../UI/Card.js';
import Button from '../UI/Button';

const UsersList = props => {
    let activeUsers = props.users.filter(user => user.active === true)
    function deleteHandler(event){
       props.deleteUser(event.target.value);
    }
    return(
        <Card>
            <ul className="users">
                {activeUsers.map(user =>
                <li key={user.id}>
                    {user.name}({user.age} years old)
                    <Button value={user.id} ClickHandler={deleteHandler}>Delete</Button>
                </li>
                )}
            </ul>
        </Card>
    );
};

export default UsersList;