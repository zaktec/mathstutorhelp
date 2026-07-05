import { getPermalink } from './permalinks';
import { contactDetails } from './siteDetails';

interface EducationEventOptions {
  name: string;
  description: string;
  pageUrl: URL;
  siteUrl?: URL;
  startDate: string;
  endDate: string;
  image: string;
  price: string;
  bookingUrl: string;
  validFrom: string;
}

export const createEducationEventSchema = ({
  name,
  description,
  pageUrl,
  siteUrl,
  startDate,
  endDate,
  image,
  price,
  bookingUrl,
  validFrom,
}: EducationEventOptions) => ({
  '@context': 'https://schema.org',
  '@type': 'EducationEvent',
  name,
  description,
  url: String(pageUrl),
  startDate,
  endDate,
  image: [String(new URL(image, siteUrl ?? pageUrl))],
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Levenshulme High School',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Crossley Road',
      addressLocality: 'Levenshulme',
      addressRegion: 'Manchester',
      postalCode: 'M19 1FS',
      addressCountry: 'GB',
    },
  },
  organizer: {
    '@type': 'EducationalOrganization',
    name: 'MathsTutorHelp',
    url: String(new URL(getPermalink('/'), siteUrl ?? pageUrl)),
    telephone: contactDetails.phoneDisplay,
  },
  performer: {
    '@type': 'Person',
    name: 'Mr Sheraz Cheema',
    url: String(new URL(getPermalink('/about'), siteUrl ?? pageUrl)),
  },
  offers: {
    '@type': 'Offer',
    price,
    priceCurrency: 'GBP',
    availability: 'https://schema.org/LimitedAvailability',
    validFrom,
    url: bookingUrl,
  },
});
