import { FC } from 'react';
import styles from './Partners.module.scss';
import { PartnerProps, PartnersProps } from './interfaces';
import { images } from 'assets/partners';
import { ScrollRevealList } from 'components/animation';

const Partners: FC<PartnersProps> = ({ partners }) => {
  return (
    <section className={styles.Partners}>
      <ScrollRevealList className={styles.List} childrenClassName={styles.Partner}>
        {partners.map((partner: PartnerProps, i: number) => (
          <a
            href={partner.link}
            hrefLang={partner.lang || 'en-US'}
            aria-label={partner.alt}
            target="_blank"
            rel="noopener noreferrer"
            key={`partner${i}`}
          >
            <img src={images[partner.logo]} alt={partner.alt} height={partner.height || 32} />
          </a>
        ))}
      </ScrollRevealList>
    </section>
  );
};

export default Partners;
