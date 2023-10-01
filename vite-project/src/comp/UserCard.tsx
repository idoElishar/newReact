import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const UserCard: React.FC<User> = ({ id, name, email }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showTasks, setShowTasks] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await axios.get<Task[]>(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
        const tasksData = response.data;
        setTasks(tasksData.slice(0, 5)); // רק חמש המשימות הראשונות
      } catch (error) {
        console.error('שגיאה:', error);
      }
    }

    if (showTasks) {
      fetchTasks();
    }
  }, [showTasks, id]);

  const toggleTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className="user-card">
      <h2 onClick={toggleTasks}>{id}, {name}</h2>
      <p>{email}</p>
      {showTasks && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserCard;
