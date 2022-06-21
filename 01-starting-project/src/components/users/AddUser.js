import React,{useState} from 'react';
import './AddUser.css';
import Card from'../UI/Card.js';
import Button from '../UI/Button.js';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props=> {
    const [enteredUsername,setEnteredUsername] = useState("");
    const [enteredAge,setEnteredAge] = useState("");
    const [error,setError] = useState();
    function errorHandler(){
        setError(null);
    }
    function usernameChangeHandler(event){
        setEnteredUsername(event.target.value)
    }
    function ageChangeHandler(event){
        setEnteredAge(event.target.value)
    }
    function addUserHandler(event){
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:"Invalid Input",
                message:"Please enter a valid name and / or age (non-empty value)"
            });
            return;
        }
        if(+enteredAge<1){
            setError({
                title:"Invalid Age",
                message:"Please enter an age > 1"
            });
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }
    return(
            <div>
            {error && <ErrorModal
            title ={error.title}
            message={error.message}
            onHandleError={errorHandler}>
            </ErrorModal>}
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input value={enteredUsername} onChange={usernameChangeHandler} id="username" type="text"></input>

            <label htmlFor="age">Age (Years)</label>
            <input value={enteredAge} onChange={ageChangeHandler} id="age" type="number"></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    );
};
export default AddUser;