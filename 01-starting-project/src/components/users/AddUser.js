import React, {useState} from "react";
import "./AddUser.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";

const AddUser = props => {
    const [enteredUsername,setEnteredUsername] = useState("");
    const [enteredAge,setEnteredAge] = useState("");
    function usernameChangeHandler(event) {
        setEnteredUsername(event.target.value);
    }
    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    }
    function addUserHandler(event) {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if(+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    }
    return (
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input value={enteredUsername} id="username" type="text" onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age (In Years)</label>
            <input value={enteredAge} id="age" type="number" onChange={ageChangeHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    );
};
export default AddUser;