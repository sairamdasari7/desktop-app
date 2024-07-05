// Header.jsx
import React from 'react';
import { Flex, Heading } from '@adobe/react-spectrum';

const Header = () => {
  return (
    <Flex direction="row" justifyContent="space-between" alignItems="center" padding="size-200">
      <Heading level={1}>Admin Dashboard</Heading>
      <Heading level={2}>Indira Gandhi International Airport</Heading>
 
    </Flex>
  );
};

export default Header;
