import React from 'react'
import axios from 'axios';
async function UseEffect1() {
    
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const usersData = response.data;
        console.log(usersData);
      
    
  return (
    <div>
      
    </div>
  )
}

export default UseEffect1
