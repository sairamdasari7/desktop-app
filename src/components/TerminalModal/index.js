// TerminalModal.jsx
import React from 'react';
import { Dialog, Heading, Divider, Content, ButtonGroup, Button, TextField } from '@adobe/react-spectrum';

const TerminalModal = ({ isOpen, onClose }) => {
  return (
    <Dialog isOpen={isOpen} onDismiss={onClose}>
      <Heading>Terminal title</Heading>
      <Divider />
      <Content>
        <TextField label="Title" />
        <TextField label="Description" />
        <Button variant="secondary">Upload Image</Button>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={onClose}>Cancel</Button>
        <Button variant="cta" onPress={onClose}>Continue</Button>
      </ButtonGroup>
    </Dialog>
  );
};

export default TerminalModal;
