import { FC } from 'react';
import styles from './Partners.module.scss';
import { PartnerImage, PartnerProps, PartnersProps } from './interfaces';
import { ScrollRevealList } from '@components/animation';
import Image from 'next/image';
import Link from 'next/link';

const PartnerImages: PartnerImage[] = [
  { url: '/images/partners/mastercard-icon.png', width: 102, height: 79 },
  { url: '/images/partners/Make-Logo-RGB-White.svg', width: 160, height: 32 },
  { url: '/images/partners/UoB-white-line.png', width: 384, height: 97 },
];

const Partners: FC<PartnersProps> = ({ partners }) => {
  return (
    <section className={styles.Partners}>
      <h2 className={styles.title}>*Organizations I worked/studied at.</h2>
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
              height={partner.height || PartnerImages[i].height}
              width={
                partner.height
                  ? PartnerImages[i].width * (partner.height / PartnerImages[i].height)
                  : PartnerImages[i].width
              }
            />
          </Link>
        ))}
      </ScrollRevealList>
    </section>
  );
};

export default Partners;
