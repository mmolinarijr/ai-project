
import Users from '@/components/Users';

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

const GetUsers = async () => {
  const users = await getUsers();

  return (
    <Users users={users} />
  );
}

export default GetUsers;
