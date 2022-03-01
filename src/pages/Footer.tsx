import React from 'react';
import FooterItem from '../components/FooterItem';

const Footer = () => {
  const items = [
    {
      id: 1,
      name: 'Hey',
      age: 25,
    },
    {
      id: 2,
      name: 'Lena',
      age: 22,
    },
    {
      id: 3,
      name: 'Oila',
      age: 35,
    },
  ];

  return (
    <div>
      <FooterItem items={items} />
    </div>
  );
};

export default Footer;
