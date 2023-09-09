export interface PillProps {
  text: string;
  color?: string | number;
}

export interface PillListProps {
  pills: PillProps[];
  randomColor?: boolean;
  sort?: boolean;
}
