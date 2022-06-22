import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }
  function addUserHandler(event) {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and/or age (non-empty value)",
      });
      return;
    }
    if (+enteredAge <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter an age > 0",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  }
  function errorHandler() {
    setError(null);
  }
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={errorHandler}
        ></ErrorModal>
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (In Whole Years)</label>
          <input
            value={enteredAge}
            id="age"
            type="number"
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
