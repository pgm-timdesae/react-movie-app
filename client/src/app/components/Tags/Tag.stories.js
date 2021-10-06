import React from 'react';
import Tag from '../Tags/Movietag';

export default {
  title: 'Tag',
  component: Tag,
}

const Template = (args) => <Tag {...args}></Tag>

export const Primary = Template.bind({});
Primary.args = {
  type: 'Primary'
}