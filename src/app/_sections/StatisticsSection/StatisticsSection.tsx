'use client';

import { useInView } from 'framer-motion';
import styles from './StatisticsSection.module.scss';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';

const StatisticsSection = ({totalContributions}: {totalContributions: number}) => {
    const wrapperRef = useRef<HTMLUListElement>(null);
    const inView = useInView(wrapperRef, { once: true });

    const countUpRef1 = useRef(null);
    const { start: start1 } = useCountUp({
        ref: countUpRef1,
        start: 0,
        end: totalContributions,
        duration: 2.5,
    });

    const countUpRef2 = useRef(null);
    const { start: start2 } = useCountUp({
        ref: countUpRef2,
        start: 0.0,
        end: Math.round(10 * (Date.now() - Date.parse("2021-10-01")) / 365 / 24 / 60 / 60 / 1000) / 10,
        duration: 2.5,
        suffix: '+',
        decimals: 1
    });

    const countUpRef3 = useRef(null);
    const { start: start3, update } = useCountUp({
        ref: countUpRef3,
        start: 2500,
        end: 500,
        duration: 2.5,
        suffix: 'ms',
        onUpdate: (value) => {
            update(`${value}ms`);
        }
    });

    useEffect(() => {
        if (inView) {
            start1();
            start2();
            start3();
        }
    }, [inView, start1, start2, start3]);

    return (
        <section className={styles.StatisticsSection}>
            <ul ref={wrapperRef} className={styles.statistics}>
                <li className={styles.statistic}>
                    <h3 ref={countUpRef1}>{totalContributions}</h3>
                    <p>GitHub Contributions to Personal Projects</p>
                    <p className={styles.subtitle}>(Past 12 months)</p>
                </li>
                <li className={styles.statistic}>
                    <h3 ref={countUpRef2}>{Math.round(10 * (Date.now() - Date.parse("2021-10-01")) / 365 / 24 / 60 / 60 / 1000) / 10}+</h3>
                    <p>Years in Web Development!</p>
                </li>
                <li className={styles.statistic}>
                    <h3 ref={countUpRef3}>500ms</h3>
                    <p>Page load time (<b>2 seconds faster</b> than average*)</p>
                    <p className={styles.subtitle}>*Based on 2024 statistics for desktop (<Link href="https://www.tooltester.com/en/blog/website-loading-time-statistics/" target='_blank'>source</Link>)</p>
                </li>
            </ul>
        </section>
    );
}
 
export default StatisticsSection;