import ContainerComp from './Container';


export default {
  title: 'Atoms/Container/Container',
  component: ContainerComp,
  tags: ['autodocs'],
  argTypes: {
  },
};

const Template = args => <ContainerComp{...args} />;

export const Default = Template.bind ({});
  Default.args = {
    width: '400px',
    height: '300px',
    children: 'This is a container'
  };