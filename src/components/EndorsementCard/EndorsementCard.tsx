import Image from 'next/image';
import styles from './EndorsementCard.module.scss';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';

type Props = {
    name: string;
    title: string;
    subtitle?: string;
    company: string;
    companyIcon?: string;
    quotes: string[];
    image: string;
    link: string;
}

const EndorsementCard: React.FC<Props> = ({
    name, title, subtitle, company, companyIcon, quotes, image, link
}) => {
    return (
        <div className={styles.EndorsementCard}>
            {quotes.map((quote, index) => {
                return (
                    <blockquote key={index} className={styles.quote}>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                        </svg>
                        <p dangerouslySetInnerHTML={{__html: quote}}></p>
                    </blockquote>
                );
            })}
            <div className={styles.infoWrapper}>
                <Link
                    href={link}
                    aria-label={`LinkedIn profile of ${name}`}
                    target="_blank"
                    className={styles.link}
                >
                    <BsLinkedin className={styles.linkIcon} />
                    <Image className={styles.image} src={image} alt={name} width={64} height={64} />
                </Link>
                <div className={styles.info}>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <h4 className={styles.name}>{name}</h4>
                    <p className={styles.position}>{title} | {companyIcon ? <Image className={styles.companyIcon} src={companyIcon} alt={company} width={160} height={40} /> : company}</p>
                </div>
            </div>
        </div>
    );
}
 
export default EndorsementCard;