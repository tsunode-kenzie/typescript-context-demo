import { useForm } from 'react-hook-form';
import { IUser, useUserContext } from '../../contexts/UserContext';

export type IUserRegister = Omit<IUser, 'id'>;

const RegisterUser = () => {
  const { handleSubmit, register } = useForm<IUserRegister>();
  const { registerUser } = useUserContext();

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <input type='text' {...register('name')} />
      <input type='text' {...register('age')} />

      <button type='submit'>Cadastrar</button>
    </form>
  );
};

export default RegisterUser;
