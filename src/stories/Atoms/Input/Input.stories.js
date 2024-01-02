import Input  from './Input';


export default {
  title: 'Atoms/Input/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Input {...args} />;

export const False = Template.bind ({});
  False.args = {
    variant: 'false',
  };

export const True = Template.bind ({});
  True.args = {
    variant: 'true',
  };