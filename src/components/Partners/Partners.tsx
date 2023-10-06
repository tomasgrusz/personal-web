import { FC } from 'react';
import styles from './Partners.module.scss';
import { PartnerProps, PartnersProps } from './interfaces';
import { ScrollRevealList } from '@components/animation';
import Image from 'next/image';
import Link from 'next/link';

const PartnerImages = [
  { url: '/images/partners/Make-Logo-RGB-White.svg', width: 160 },
  { url: '/images/partners/UoB-white-line.png', width: 300 },
];

const Partners: FC<PartnersProps> = ({ partners }) => {
  return (
    <section className={styles.Partners}>
      <ScrollRevealList className={styles.List} childrenClassName={styles.Partner}>
        {partners.map((partner: PartnerProps, i: number) => (
          <Link
            href={partner.link}
            hrefLang={partner.lang || 'en-US'}
            aria-label={partner.alt}
            target="_blank"
            rel="noopener noreferrer"
            key={`partner${i}`}
          >
            <Image
              src={PartnerImages[i].url}
              alt={partner.alt}
              height={partner.height || 32}
              width={PartnerImages[i].width}
            />
          </Link>
        ))}
      </ScrollRevealList>
    </section>
  );
};

export default Partners;
