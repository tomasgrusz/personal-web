"use client";

import styles from './ProgressCircle.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

const cleanPercentage = (percentage: number) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const color = "rgb(32, 203, 103)";
const darkColor = "rgb(38, 50, 42)";
const r = 70;
const circumference = 2 * Math.PI * r;
const strokePct = (percentage: number) => ((100 - percentage) * circumference) / 100;
  
export const ProgressCircle = ({ percentage }: {percentage: number}) => {
    const pct = cleanPercentage(percentage);

    const [progress, setProgress] = useState(0);

    const wrapperRef = useRef<SVGSVGElement>(null);
    const inView = useInView(wrapperRef, { once: true });

    useEffect(() => {
        if (inView) {
            animate(0, pct, {
                duration: 2,
                type: "tween",
                onUpdate: latest => setProgress(latest),
            })
        }
    }, [inView]);

    return (
        <svg ref={wrapperRef} className={styles.ProgressCircle} viewBox="0 0 200 200">
            <g transform={`rotate(-90 ${"100 100"})`}>
                <circle r={r} cx={100} cy={100} fill={darkColor} />
                <circle
                    r={r}
                    cx={100}
                    cy={100}
                    fill="transparent"
                    stroke={color}
                    strokeWidth={"0.7rem"}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokePct(progress)}
                    strokeLinecap="round"
                />
            </g>
            <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize={"3rem"}
                style={{ fontFamily: "monospace" }}
                fill={color}
            >
                {progress.toFixed(0)}
            </text>
        </svg>
    );
};