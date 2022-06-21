import React,{useState} from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';

function App() {
  const [usersList,setUsersList] = useState([]);
  function addUserHandler(username,age){
    const newUser = {
      name:username,
      age:age,
      active:true,
      id:Math.random().toString(),
    }
    setUsersList((prevUsersList)=>{
      return[...prevUsersList,newUser];
    })
  }
  function deleteUserHandler(userID){
    const userIndex = usersList.findIndex(user => user.id ===userID);
    const updatedUsers = [...usersList];
    updatedUsers[userIndex].active = false;
    setUsersList(updatedUsers);
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList deleteUser ={deleteUserHandler} users={usersList}></UserList>
    </div>
  );
};

export default App;
