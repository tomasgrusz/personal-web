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
            <div className={styles.endorsements}>
                {endorsements.map((endorsement, index) => {
                    return <EndorsementCard key={index} {...endorsement} companyIcon={PartnerImages[endorsement.company]} />
                })}
            </div>
            <p>Discover all endorsements <Link href={'https://www.linkedin.com/in/tomasgrusz/details/recommendations/'}>here</Link>.</p>
        </section>
    );
}
 
export default EndorsementSection;