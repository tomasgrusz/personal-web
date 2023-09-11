import { ReactNode } from 'react';

export interface LinkProps {
  icon?: ReactNode;
  text?: string;
  external?: boolean;
  nav?: boolean;
  link?: string;
  animate?: boolean;
}
