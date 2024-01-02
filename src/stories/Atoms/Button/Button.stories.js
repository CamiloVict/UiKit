import Button  from './Button';


export default {
  title: 'Atoms/Button/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind ({});
  Primary.args = {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
  };

export const Secondary = Template.bind ({});
  Secondary.args = {
    variant: 'secondary',
    size: 'medium',
    label: 'Button',
  };

export const Large = Template.bind ({});
  Large.args = {
    variant: 'primary',
    size: 'large',
    label: 'Button',
  };

export const Small = Template.bind ({});
  Small.args = {
    variant: 'primary',
    size: 'small',
    label: 'Button',
  };