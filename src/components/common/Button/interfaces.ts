import { ReactNode } from 'react';

export interface ButtonProps {
  icon?: ReactNode;
  link?: string;
  text: string;
  external?: boolean;
  style?: 1 | 2 | 3;
  onClick?: (e: any) => void;
}
