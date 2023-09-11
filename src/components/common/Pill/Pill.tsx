import { FC, useEffect, useState } from 'react';
import styles from './Pill.module.scss';
import { PillListProps, PillProps } from './interfaces';

const colors = ['#63D0FF88', '#B163FF88', '#FF63DD88', '#57e1ae99', '#6663FF88'];

const Pill: FC<PillProps> = ({ text, color }) => {
  const [pillColor, setPillColor] = useState<string>(colors[0]);
  const bgColor = () => {
    if (typeof color === 'number' && 0 <= color && color <= colors.length - 1) {
      setPillColor(colors[color]);
    } else if (color === 'random') {
      setPillColor(colors[Math.round(Math.random() * (colors.length - 1))]);
    } else if (typeof color === 'string') {
      setPillColor(color);
    }
  };

  useEffect(() => {
    bgColor();
  }, []);

  return (
    <div className={styles.Pill} style={{ backgroundColor: pillColor }}>
      <label>{text}</label>
    </div>
  );
};

const PillList: FC<PillListProps> = ({ pills, randomColor, sort }) => {
  return (
    <div className={styles.PillList}>
      {sort
        ? pills
            .sort((a, b) => {
              if (a.text === b.text) return 0;
              return a.text > b.text ? 1 : -1;
            })
            .map((pill, i) => {
              return (
                <Pill
                  text={pill.text}
                  color={randomColor ? 'random' : pill.color}
                  key={`pill-${i}`}
                ></Pill>
              );
            })
        : pills.map((pill, i) => {
            return (
              <Pill
                text={pill.text}
                color={randomColor ? 'random' : pill.color}
                key={`pill-${i}`}
              ></Pill>
            );
          })}
    </div>
  );
};

export { Pill, PillList };
