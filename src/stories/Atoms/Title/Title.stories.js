import TitleComp from './Title';


export default {
  title: 'Atoms/Title/Title',
  component: TitleComp,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// const Template = args => <TitleComp {...args} />;

// export const Small = Template.bind ({});
//   Small.args = {
//     size: 'small',
//     label: 'Title',
//   };

// export const Large = Template.bind ({});
//   Large.args = {
//     size: 'large',
//     label: 'Title',
//   };


const Template = args => <TitleComp {...args} />;

export const Small = Template.bind ({});
  Small.args = {
    Tag: 'h6',
    text: 'Title 1'
  };

export const Large = Template.bind ({});
  Large.args = {
    Tag: 'h1',
    text: 'Title 1'
  };

