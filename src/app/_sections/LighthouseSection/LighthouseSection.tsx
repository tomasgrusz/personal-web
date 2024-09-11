import { ProgressCircle } from '@/components/common/ProgressCircle/ProgressCircle';
import styles from './LighthouseSection.module.scss';

const LighthouseSection = () => {
    return (
        <section className={styles.LighthouseSection}>
            <div className={styles.info}>
                <h2 className={styles.heading}>Lightspeed Performance</h2>
                <p className={styles.description}>I take pride in delivering fast and accessible websites. My goal is to provide the best possible experience for the end user, which is why I always aim for the highest possible scores in Google&apos;s Lighthouse audits.</p>
            </div>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <ProgressCircle percentage={100} />
                    <p>Performance</p>
                </div>
                <div className={styles.stat}>
                    <ProgressCircle percentage={100} />
                    <p>SEO</p>
                </div>
                <div className={styles.stat}>
                    <ProgressCircle percentage={100} />
                    <p>Best Practices</p>
                </div>
                <div className={styles.stat}>
                    <ProgressCircle percentage={100} />
                    <p>Accessibility</p>
                </div>
                <p className={styles.footnote}>Google PageSpeed Insights, Sep 9th 2024 (<a href='https://pagespeed.web.dev/analysis/https-grusz-dev/wo6e5y5qyl?form_factor=desktop' target='_blank'>Source</a>)</p>
            </div>
        </section>
    );
}
 
export default LighthouseSection;