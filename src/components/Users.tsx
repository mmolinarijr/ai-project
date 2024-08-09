import React from 'react';
import ReturnButton from './layout/ReturnButton';

interface User {
  name: string;
  email: string;
}

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <ReturnButton />

      <h2>Usuários</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Nome:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;