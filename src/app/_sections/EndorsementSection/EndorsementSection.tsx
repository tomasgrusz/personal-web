import EndorsementCard from '@/components/EndorsementCard/EndorsementCard';
import styles from './EndorsementSection.module.scss';
import endorsements from './data/endorsements.json';
import Link from 'next/link';

const PartnerImages: Record<string, string> = {
    'Make': '/images/partners/Make-Logo-RGB-White.svg',
    'University of Birmingham': '/images/partners/UoB-white-line.png',
};

const EndorsementSection = () => {
    return (
        <section className={styles.EndorsementSection}>
            <h2 className={styles.heading}>What colleagues are saying</h2>
            <p className={styles.description}>Grateful to have worked with such talented people. Here&apos;s a glimpse of their thoughts on our time together and the experiences we&apos;ve shared. <Link href={'https://www.linkedin.com/in/tomasgrusz/details/recommendations/'} target='_blank' aria-label='LinkedIn endorsements'>Discover all endorsements</Link>.</p>
            <div className={styles.endorsements}>
                {endorsements.map((endorsement, index) => {
                    return <EndorsementCard key={index} {...endorsement} companyIcon={PartnerImages[endorsement.company]} />
                })}
            </div>
        </section>
    );
}
 
export default EndorsementSection;