import './App.css';
import RegisterUser from './components/RegisterUser';
import UserList from './components/UserList';
import UserProvider from './contexts/UserContext';

function App() {
  // usuario pode não ter tecnologia
  // usuario pode ter varias tecnologias
  // usuario pode ter apenas uma tecnologia

  // const user: IUser = { name: 'Tsunode', age: 24 };

  return (
    <UserProvider>
      <div className='App'>
        <RegisterUser />
        <UserList>
          <h1>Usuarios:</h1>
        </UserList>
      </div>
    </UserProvider>
  );
}

export default App;
