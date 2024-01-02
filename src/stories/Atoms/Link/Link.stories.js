import {LinkComp} from './Link';


export default {
  title: 'Atoms/Link/Link',
  component: LinkComp,
  tags: ['autodocs'],
  argTypes: {
  },
};

const Template = args => <LinkComp {...args} />;

export const Default = Template.bind ({});
  Default.args = {
    href: 'https://youtu.be/2w7khl1lixQ',
    text: 'Click me!',
  };
