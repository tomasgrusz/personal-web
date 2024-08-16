import { FaReact } from "react-icons/fa6";
import { GoBug, GoCommandPalette, GoPencil, GoStack, GoTools } from "react-icons/go";

const skills = [
  {
    icon: <FaReact size={128} color="#61dbfb" />,
    label: 'Libraries',
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
        text: 'Next.js',
        color: 'random',
      },
      {
        text: 'Framer Motion',
        color: 'random',
      },
      {
        text: 'React Hook Form',
        color: 'random',
      }
    ],
    title: 'React',
    description:
      'From orchestrating components to mastering state like a cosmic dance, React expertise is the rocket fuel that propels digital dreams into the stratosphere.',
  },
  {
    icon: <GoCommandPalette size={128} color="#EEA8FF" />,
    label: 'Languages',
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
    description:
      'Exploring the vast universe of web development, from wielding TypeScript like a laser sword, to sculpting styles with CSS like an interstellar artist.',
  },
  {
    icon: <GoPencil size={128} color="#F6A1BD" />,
    label: 'Design Tools',
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
    description:
      'Transforming ideas into visually stunning and user-centric experiences, ensuring your digital creations shine like stars in the digital cosmos.',
  },
  {
    icon: <GoStack size={128} color="#3DD9D8" />,
    label: 'Technologies',
    pills: [
      {
        text: 'Node',
        color: 'random',
      },
      {
        text: 'PostgreSQL',
        color: 'random',
      },
      {
        text: 'Vercel',
        color: 'random',
      },
      {
        text: 'Express',
        color: 'random',
      },
      {
        text: 'MongoDB',
        color: 'random',
      },
      {
        text: 'GraphQL',
        color: 'random',
      },
    ],
    title: 'Full-Stack',
    description:
      'From the back-end to the front-end, wielding the power of full-stack development to create out of this world digital experiences.',
  },
  {
    icon: <GoBug size={128} color="#FD6894" />,
    label: 'Testing Environments',
    pills: [
      {
        text: 'Cypress',
        color: 'random',
      },
      {
        text: 'Playwright',
        color: 'random',
      },
      {
        text: 'Storybook',
        color: 'random',
      },
      {
        text: 'Lighthouse',
        color: 'random',
      },
      {
        text: 'Jest',
        color: 'random',
      },
    ],
    title: 'Testing',
    description: 'Testing is the final frontier, ensuring your digital creations are bug-free and ready to launch into the digital cosmos.',
  },
  {
    icon: <GoTools size={128} />,
    label: 'Miscellaneous',
    pills: [
      {
        text: 'Git',
        color: 'random',
      },
      {
        text: 'Bun',
        color: 'random',
      },
      {
        text: 'Yarn',
        color: 'random',
      },
      {
        text: 'CircleCI',
        color: 'random',
      },
      {
        text: 'Markdown',
        color: 'random',
      },
      {
        text: 'LaTeX',
        color: 'random',
      },
      {
        text: 'NPM',
        color: 'random',
      },
    ],
    title: 'Miscellaneous',
    description: 'From version control to project management, every aspect of your project will be in precise alignment.',
  },
];
export default skills;
