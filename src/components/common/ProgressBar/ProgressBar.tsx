'use client';

import { useEffect, useRef } from 'react';
import styles from './ProgressBar.module.scss';
import { motion, useAnimation, useInView } from 'framer-motion';
import CountUp, { useCountUp } from 'react-countup';

type Props = {
    value: number;
    label?: number;
    suffix?: string;
    width?: number;
    color: string;
}

const ProgressBar: React.FC<Props> = ({
    value,
    width,
    color,
    label,
    suffix,
    ...props
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inView = useInView(wrapperRef, { once: true });

    const controls = useAnimation();

    const countUpRef = useRef(null);
    const { start } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: label || value,
        duration: 1.5,
        suffix: suffix || '',
    });

    useEffect(() => {
        if (inView) {
        controls.start('default');
        start();
        }
    }, [inView, controls]);

    return (
        <div className={styles.wrapper} {...props}>
            <div ref={wrapperRef} className={styles.ProgressBar} style={{width: width || '100%'}}>
                <motion.div 
                    className={styles.fill}
                    style={{backgroundColor: color}}
                    variants={{
                        hidden: { width: 0 },
                        default: { width: `${value}%` },
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{
                        duration: 1.25,
                        type: 'tween'
                    }}
                >
                </motion.div>
            </div>
            <div ref={countUpRef} />
        </div>
    );
}
 
export default ProgressBar;