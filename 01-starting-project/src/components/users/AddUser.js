import React,{useState} from 'react';
import './AddUser.css';
import Card from'../UI/Card.js';
import Button from '../UI/Button.js';

const AddUser = props=> {
    const [enteredUsername,setEnteredUsername] = useState("");
    const [enteredAge,setEnteredAge] = useState("");
    function usernameChangeHandler(event){
        setEnteredUsername(event.target.value)
    }
    function ageChangeHandler(event){
        setEnteredAge(event.target.value)
    }
    function addUserHandler(event){
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge<1){
            return;
        }
        setEnteredAge('');
        setEnteredUsername('');
    }
    return(
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input value={enteredUsername} onChange={usernameChangeHandler} id="username" type="text"></input>

            <label htmlFor="age">Age (Years)</label>
            <input value={enteredAge} onChange={ageChangeHandler} id="age" type="number" min="0" step=".1"></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    );
};
export default AddUser;