import React, {ReactElement, useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {Typography} from "../common/typography/Typography";

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

interface SignInState {
  id: string;
  password: string;
}

export const SignIn = (): ReactElement => {
  const router = useNavigate();
  const [inputState, setInputState] = useState<SignInState>({
    id: '',
    password: '',
  });
  const {id, password} = inputState;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = e.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  const onSubmitFormAction = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    try {
      e.preventDefault();
      router('/', {replace: true});
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInForm onSubmit={onSubmitFormAction}>
      <Typography variant={'h1'} weight={'bold'} color={'white'}>
        데브위키
      </Typography>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="id"
          value={id}
          onChange={onChangeInput}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChangeInput}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Sign In
      </button>
    </SignInForm>
  );
};
