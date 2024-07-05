import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { View, Heading } from '@adobe/react-spectrum';
import HomeIcon from '@spectrum-icons/workflow/Home';
import ShieldIcon from '@spectrum-icons/workflow/Shield'; // Example of an alternative icon

const Sidebar = () => {
  const location = useLocation();

  return (
    <View width="250px" backgroundColor="#f0f0f0" padding="20px">
      <View marginBottom="size-200">
        <Link to="/">
          <HomeIcon size="S" />
          <span style={{ marginLeft: '10px' }}>Home</span>
        </Link>
      </View>
      <View marginBottom="size-200">
        <ShieldIcon size="S" />
        <span style={{ marginLeft: '10px' }}>Dashboard</span>
      </View>
      <Heading level={3} marginTop="size-200">Services</Heading>
      <View style={{ backgroundColor: location.pathname === '/desktop2' ? '#ccc' : '#f0f0f0', padding: '8px' }}>
        <Link to="/desktop2" style={{ textDecoration: 'none', color: 'inherit' }}>Airports</Link>
      </View>
      <View marginBottom="size-200">Videos</View>
      <Heading level={3} marginTop="size-200">Others</Heading>
      <View marginBottom="size-200">List 1</View>
      <View marginBottom="size-200">List 2</View>
      <View>List 3</View>
    </View>
  );
};

export default Sidebar;
