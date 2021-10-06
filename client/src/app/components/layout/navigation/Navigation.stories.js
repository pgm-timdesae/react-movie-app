import React from 'react';
import Navigation from '../navigation/Navigation';
import MemoryRouter from 'react-router-dom';


const WithMemoryRouter = (Story) => {
  return <MemoryRouter><Story/></MemoryRouter>
}

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [WithMemoryRouter]
}

const Template = (args) => <Navigation {...args}></Navigation>

export const Main = Template.bind({});
Main.args = {
  type: 'Main'
}
