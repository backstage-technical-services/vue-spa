import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export interface ErrorProps {
  code: number;
  details: string;
}

export interface ErrorData {
  icons: {
    [key: string]: IconDefinition;
  };
}
