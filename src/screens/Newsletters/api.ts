import { NEWSLETTER_ITEMS } from '../../mocks/newsletters';

export const fetchNewsletters = async () => {
  // Simulate a delay to mimic an actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NEWSLETTER_ITEMS);
    }, 1000); // 1-second delay
  });
};
