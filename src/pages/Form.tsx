import React, { FC, useState } from 'react';

const Form: FC = () => {
  const [set, setSet] = useState<string>('0');

  const formSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const clicked = () => {
    console.log('something');
  };

  return (
    <form onSubmit={formSubmitted}>
      <button onClick={clicked}></button>
    </form>
  );
};

export default Form;
