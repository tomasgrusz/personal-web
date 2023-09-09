import { FullStack, Idea, React, VSCode } from 'icons';

const desc =
  'Excepteur sunt commodo consequat nulla amet adipisicing cillum nulla et ullamco labore eiusmod voluptate. Ad minim exercitation incididunt nisi cupidatat minim reprehenderit esse eiusmod laborum quis deserunt amet. Incididunt minim adipisicing deserunt occaecat id voluptate magna veniam aliqua amet sint sunt amet. In laborum laborum nulla mollit velit. Eu magna Lorem est magna anim laborum est commodo deserunt nulla. Amet excepteur ad culpa commodo deserunt eu irure pariatur id magna. Sunt veniam est sunt magna cillum est exercitation laborum ut eu.';

const skills = [
  {
    icon: <React />,
    pills: [
      {
        text: 'ReactRouter',
        color: 'random',
      },
      {
        text: 'Three.js',
        color: 'random',
      },
      {
        text: 'Text',
        color: 'random',
      },
    ],
    title: 'React',
    description: desc,
  },
  {
    icon: <VSCode />,
    pills: [
      {
        text: 'TypeScript',
        color: 'random',
      },
      {
        text: 'CSS',
        color: 'random',
      },
      {
        text: 'JavaScript',
        color: 'random',
      },
      {
        text: 'HTML',
        color: 'random',
      },
      {
        text: 'SCSS',
        color: 'random',
      },
      {
        text: 'Python',
        color: 'random',
      },
    ],
    title: 'Web Development',
    description: desc,
  },
  {
    icon: <Idea />,
    pills: [
      {
        text: 'Figma',
        color: 'random',
      },
      {
        text: 'Blender 3D',
        color: 'random',
      },
      {
        text: 'Canva',
        color: 'random',
      },
      {
        text: 'Balsamiq',
        color: 'random',
      },
      {
        text: 'Procreate',
        color: 'random',
      },
      {
        text: 'Sass',
        color: 'random',
      },
    ],
    title: 'Designing',
    description: desc,
  },
  {
    icon: <FullStack />,
    pills: [
      {
        text: 'Node',
        color: 'random',
      },
      {
        text: 'Git',
        color: 'random',
      },
      {
        text: 'Vercel',
        color: 'random',
      },
      {
        text: 'Cloudflare',
        color: 'random',
      },
      {
        text: 'Express',
        color: 'random',
      },
      {
        text: 'PostgreSQL',
        color: 'random',
      },
      {
        text: 'Mongo',
        color: 'random',
      },
      {
        text: 'DigitalOcean',
        color: 'random',
      },
    ],
    title: 'Full-Stack',
    description: desc,
  },
];
export default skills;
