import LabelComp from './Label';


export default {
  title: 'Atoms/Label/Label',
  component: LabelComp,
  tags: ['autodocs'],
  argTypes: {
  },
};

const Template = args => <LabelComp {...args} />;

export const Default = Template.bind ({});
  Default.args = {
    type: 'label',
    name: 'Label 1',
  };