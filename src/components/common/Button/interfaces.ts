import { ReactNode } from 'react';

export interface ButtonProps {
  icon?: ReactNode;
  link?: string;
  text: string;
  external?: boolean;
}
