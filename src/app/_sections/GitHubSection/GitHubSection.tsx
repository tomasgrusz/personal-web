import styles from './GitHubSection.module.scss';
import ProgressBar from '@/components/common/ProgressBar';
import { Language } from '@/app/actions/fetchLanguages';
import Link from 'next/link';

const GitHubSection = async ({contributions, languages}: {contributions: any, languages: Language[]}) => {

    return (
        <section className={styles.GitHubSection} id="tech">
            <div className={styles.info}>
                <h3 className={styles.heading}>GitHub Activity for Personal Repositories</h3>
                <p className={styles.description}>My GitHub contributions reflect my commitment to continuous learning and development. Here is an overview of my activity and the languages I frequently use. <Link href="https://github.com/tomasgrusz" target='_blank'>Explore GitHub activity</Link></p>
            </div>
            <div className={styles.contributions}>
                {contributions.data.user.contributionsCollection.contributionCalendar.weeks.map((week: any, index: number) => {
                    return (<div key={index} className={styles.week}>
                        {week.contributionDays.map((day: any, index: number) => {
                            const isNone = day.contributionCount === 0 ? 0 : 0;
                            const isSmall = day.contributionCount < 5 && day.contributionCount !== 0 ? 1 : 0;
                            const isMedium = day.contributionCount >= 5 && day.contributionCount < 10 ? 2 : 0;
                            const isLarge = day.contributionCount >= 10 && day.contributionCount < 15 ? 3 : 0;
                            return <div key={index} className={`${styles.day} ${styles[`contribution-${isLarge || isMedium || isSmall || 0}`]}`}>
                            </div>
                        })}
                    </div>)
                })}
            </div>
            <div className={styles.languageSection}>
                <div className={styles.languages}>
                    <h3 className={styles.left}>Most used languages</h3>
                    {languages.map((language, index) => {
                        return <div key={index} className={styles.language}>
                            <ProgressBar value={language.weight} label={language.percentage} suffix='%' color={language.color} />
                            <div className={styles.languageInfo}>
                                <label className={styles.languageName}>{language.name}</label>
                                <span className={styles.count}>in {language.count} project{language.count > 1 ? 's' : ''}</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}
 
export default GitHubSection;