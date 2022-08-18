import { ReactNode } from 'react';
import { useUserContext } from '../../contexts/UserContext';

interface IUserListProps {
  children: ReactNode;
}

const UserList = ({ children }: IUserListProps) => {
  const { users } = useUserContext();

  return (
    <>
      {children}
      <ul>
        {users.map(({ id, age, name }) => (
          <li key={id}>
            {id} - {name} - {age}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
