import { ReactNode } from 'react';

export interface HeroProps {
  left?: boolean;
  animate?: boolean;
  text: string | ReactNode;
  title: string;
  image: string;
  imageAlt: string;
  buttonText?: string;
  id?: string;
}
