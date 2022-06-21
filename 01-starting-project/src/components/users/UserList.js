import React from "react";
import './UserList.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserList = (props) =>{
    function onDeleteHandler(event){
        props.users.active = false;
    }
    return(
        <Card>
            <ul className="users">
                {props.users.map(user =>
                <li key = {user.id}>
                    {user.name}({user.age} years old)
                    <Button ClickHandler={onDeleteHandler}>Delete</Button>
                </li>
                )}
            </ul>
        </Card>
    );
}
export default UserList;