import React from 'react';
import { Flex, View, Heading, Button, TableView, TableHeader, TableBody, Column, Row, Cell, Checkbox } from '@adobe/react-spectrum';
import Edit from '@spectrum-icons/workflow/Edit';
import Delete from '@spectrum-icons/workflow/Delete';
import Sidebar from '../Sidebar'; 

const airports = [
  { name: 'Indra Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
  { name: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
  { name: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
  { name: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
  { name: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 }
];

const actionButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 'size-200', 
};

const deleteButtonStyles = {
  background: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
};

const addNewButtonStyles = {
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '25px',
};

const Desktop1 = () => {
  return (
    <Flex height="100vh" direction="column">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading level={1} margin="size-200">hava havai</Heading>
      </Flex>
      <Flex direction="row" flex="1">
        <Sidebar />
        <Flex direction="column" flex="1">
          <Flex direction="row" alignItems="center" justifyContent="space-between">
            <Heading level={1} flex="1">Airports</Heading>
            <Button variant="cta" UNSAFE_style={addNewButtonStyles}>+ Add New</Button>
          </Flex>
          <View padding="size-200">
            <TableView aria-label="Airports" width="100%">
              <TableHeader>
                <Column>
                  <Checkbox>All Airports</Checkbox>
                </Column>
                <Column>Name</Column>
                <Column>Country</Column>
                <Column>Code</Column>
                <Column>Terminals</Column>
                <Column>Actions</Column>
              </TableHeader>
              <TableBody>
                {airports.map((airport, index) => (
                  <Row key={index}>
                    <Cell>
                      <Checkbox />
                    </Cell>
                    <Cell>{airport.name}</Cell>
                    <Cell>{airport.country}</Cell>
                    <Cell>{airport.code}</Cell>
                    <Cell>{airport.terminals}</Cell>
                    <Cell>
                      <View {...actionButtonStyles}>
                        <Button variant="secondary" UNSAFE_style={deleteButtonStyles}><Edit /></Button>
                        <Button variant="primary" UNSAFE_style={deleteButtonStyles}><Delete /></Button>
                      </View>
                    </Cell>
                  </Row>
                ))}
              </TableBody>
            </TableView>
          </View>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Desktop1;
