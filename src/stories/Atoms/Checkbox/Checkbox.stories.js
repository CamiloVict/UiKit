import Checkbox  from './Checkbox';


export default {
  title: 'Atoms/Checkbox/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
  },
};

const Template = args => <Checkbox {...args} />;

export const Square = Template.bind ({});
  Square.args = {
    type: 'checkbox',
  };

export const Radio = Template.bind ({});
  Radio.args = {
    type: 'radio',
  };
