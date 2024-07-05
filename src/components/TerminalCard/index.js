import React from 'react';
import { View, Heading, Text, Flex } from '@adobe/react-spectrum';


const imageURL = 'https://res.cloudinary.com/ddnpmhq8v/image/upload/v1720171325/9fa67efdaff0836c6b48500e00b4f1f6_ukjxmn.jpg';

const TerminalCard = ({ title, description }) => {
  return (
    <View
      borderWidth="thin"
      borderColor="dark"
      borderRadius="medium"
      padding="size-200"
      maxWidth="400px"
    >
      <Flex direction="row" alignItems="center" gap="size-200">
        <img src={imageURL} alt={title} style={{ width: '180px', height: '180px', borderRadius: '1px' }} />
        <View>
          <Heading level={3}>{title}</Heading>
          <Text>{description}</Text>
        </View>
      </Flex>
    </View>
  );
};

export default TerminalCard;
