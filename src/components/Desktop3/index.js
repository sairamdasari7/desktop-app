import React, { Component } from 'react';
import {
  Flex,
  View,
  Heading,
  TextField,
  Picker,
  Item,
  Switch,
  Button,
  Divider,
  ActionButton,
  Text,
} from '@adobe/react-spectrum';
import Sidebar from '../Sidebar';
import Header from '../Header';
import TerminalCard from '../TerminalCard';
import TerminalModal from '../TerminalModal';

class Desktop3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      services: [],
      serviceName: '',
      serviceCategory: 'option1',
      serviceSubCategory: 'option1',
      serviceDescription: '',
      showImage: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  addService = () => {
    const {
      serviceName,
      serviceCategory,
      serviceSubCategory,
      serviceDescription,
      showImage,
      services,
    } = this.state;

    const newService = {
      name: serviceName,
      category: serviceCategory,
      subCategory: serviceSubCategory,
      description: serviceDescription,
      showImage,
    };

    this.setState({
      services: [...services, newService],
      serviceName: '',
      serviceCategory: 'option1',
      serviceSubCategory: 'option1',
      serviceDescription: '',
      showImage: false,
    });
  };

  deleteService = (index) => {
    const updatedServices = this.state.services.filter((_, i) => i !== index);
    this.setState({ services: updatedServices });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSwitchChange = (isChecked) => {
    this.setState({ showImage: isChecked });
  };

  handleCategoryChange = (key) => {
    this.setState({ serviceCategory: key });
  };

  handleSubCategoryChange = (key) => {
    this.setState({ serviceSubCategory: key });
  };

  render() {
    const {
      isModalOpen,
      services,
      serviceName,
      serviceCategory,
      serviceSubCategory,
      serviceDescription,
      showImage,
    } = this.state;

    return (
      <Flex height="100vh">
        <Sidebar />
        <View flex>
          <Header />
          <View padding="size-200">
            <Heading level={2}>Terminals</Heading>
            <Flex direction="row" gap="size-200" wrap="wrap">
              <TerminalCard title="Terminal 1" description="Optional metadata should be two lines." />
              <TerminalCard title="Terminal 2" description="Optional metadata should be two lines." />
              <Button variant="primary" onPress={this.openModal}>
                + Add Terminal
              </Button>
            </Flex>

            <Divider size="S" marginY="size-200" />

            <Heading level={2}>Services</Heading>
            <Flex direction="column" gap="size-200">
              <TextField
                label="Service Name"
                name="serviceName"
                value={serviceName}
                onChange={this.handleInputChange}
              />
              <Picker
                label="Category"
                selectedKey={serviceCategory}
                onSelectionChange={this.handleCategoryChange}
              >
                <Item key="option1">Option 1</Item>
                <Item key="option2">Option 2</Item>
                {/* Add more options as needed */}
              </Picker>
              <Picker
                label="Sub Category"
                selectedKey={serviceSubCategory}
                onSelectionChange={this.handleSubCategoryChange}
              >
                <Item key="option1">Option 1</Item>
                <Item key="option2">Option 2</Item>
                {/* Add more options as needed */}
              </Picker>
              <TextField
                label="Description"
                name="serviceDescription"
                value={serviceDescription}
                onChange={this.handleInputChange}
              />
              <Flex alignItems="center" gap="size-200">
                <Button variant="secondary">Upload Image</Button>
                <Switch isSelected={showImage} onChange={this.handleSwitchChange}>
                  Show Image
                </Switch>
              </Flex>
              <Button variant="cta" onPress={this.addService}>
                Save
              </Button>
            </Flex>

            <Flex direction="column" gap="size-200" marginTop="size-400">
              {services.map((service, index) => (
                <Flex key={index} alignItems="center" gap="size-200">
                  <Text>{service.name}</Text>
                  <ActionButton onPress={() => this.deleteService(index)}>Delete</ActionButton>
                </Flex>
              ))}
            </Flex>
          </View>
        </View>

        <TerminalModal isOpen={isModalOpen} onClose={this.closeModal} />
      </Flex>
    );
  }
}

export default Desktop3;
