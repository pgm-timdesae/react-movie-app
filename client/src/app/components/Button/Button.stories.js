import React from 'react';
import Button from '../Button/SignInBtn'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark mode', value: '#181818'},
        { name: 'light mode', value: '#FBFBFB'}
      ] 
    }
  }
}

const Template = (args) => <Button {...args}></Button>

export const Submit = Template.bind({});
Submit.args = {
  type: 'submit'
}