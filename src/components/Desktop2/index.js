// Desktop2.jsx
import React from 'react';
import { Flex, View, Heading, Button, TextField, Picker, Item, Switch, Divider } from '@adobe/react-spectrum';
import Sidebar from '../Sidebar';
import Header from '../Header';
import TerminalCard from '../TerminalCard';

const Desktop2 = () => {
  return (
    <Flex height="100vh">
      <Sidebar />
      <View flex>
        <Header />
        <View padding="size-200">
          <Heading level={2}>Indira Gandhi International Airport</Heading>
          <Flex direction="row" gap="size-200" wrap="wrap">
            <TerminalCard title="Terminal 1" description="Optional metadata should be two lines." />
            <TerminalCard title="Terminal 2" description="Optional metadata should be two lines." />
            <Button variant="primary">+ Add Terminal</Button>
          </Flex>

          <Divider size="S" marginY="size-200" />

          <Heading level={2}>Services</Heading>
          <Flex direction="column" gap="size-200">
            <TextField label="Service Name" placeholder="Lost & found" />
            <Picker label="Category">
              <Item key="option1">Option 1</Item>
            </Picker>
            <Picker label="Sub Category">
              <Item key="option1">Option 1</Item>
            </Picker>
            <TextField label="Description" placeholder="Type here" />
            <Flex alignItems="center" gap="size-200">
              <Button variant="secondary">Upload Image</Button>
              <Switch>Show Image</Switch>
            </Flex>
            <Button variant="cta">Save</Button>
          </Flex>
        </View>
      </View>
    </Flex>
  );
};

export default Desktop2
