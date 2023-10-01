import './App.css'
import UserCard from './comp/UserCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Timer from './comp/Timer';
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function App() {
  const [users, setUsers] = useState<User[]>([]); // הוסף טיפוס למשתנה users

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        const usersData = response.data;
        setUsers(usersData);
        console.log(users);
      } catch (error) {
        console.error('שגיאה:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key ={user.id}id={user.id} name={user.name} email={user.email} />
        ))}
      </div>
      <h1>My Timer App</h1>
      <Timer initialTime={60} />
    </div>
  );
  
}

export default App;