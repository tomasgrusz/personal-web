import { FC, useEffect, useState } from 'react';
import styles from './Pill.module.scss';
import { PillListProps, PillProps } from './interfaces';
import { ScrollRevealList } from 'components/animation';

const colors = ['#3478e0aa', '#e034b2aa', '#c734e0aa', '#34c0e0aa', '#7f34e0aa'];

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
    <ScrollRevealList className={styles.PillList}>
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
    </ScrollRevealList>
  );
};

export { Pill, PillList };
