'use client';

import Title from './layout/Title';

interface User {
  name: string;
  email: string;
}

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <>
      <div className="p-6 w-96  rounded-lg shadow-sm border">
        <ul className="space-y-4">
          {users.map((user, index) => (
            <li
              key={index}
              className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
              <strong className="block text-gray-700 dark:text-gray-300">Nome:</strong>
              <span className="text-gray-900 dark:text-white">{user.name}</span>
              <strong className="block mt-2 text-gray-700 dark:text-gray-300">Email:</strong>
              <span className="text-gray-900 dark:text-white">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Users;
