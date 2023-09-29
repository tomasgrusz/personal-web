export interface PartnerProps {
  logo: string;
  alt: string;
  link: string;
  lang?: string;
  height?: number;
}

export interface PartnersProps {
  partners: PartnerProps[];
}
