import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export interface AboutProps {
  emailAddress: string;
  icons: {
    email: IconDefinition;
    phone: IconDefinition;
    office: IconDefinition;
    address: IconDefinition;
  };
}

export interface FooterLink {
  text: string;
  link: string;
}

export interface SocialLink {
  link: string;
  title: string;
  icon: IconDefinition;
}
