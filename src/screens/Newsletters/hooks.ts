import every from 'lodash/every';
import { NewsletterType } from '../../types/Newsletter';
import { UserType } from '../../types/User';
import { useMemo } from 'react';

export function useHasUserToFollowNewsletter(user: UserType, newsletter: NewsletterType): boolean {
  return useMemo(() => {
    if (!newsletter.subscriptions?.length) return false; // neswletter is accessible
    const { subscriptions } = user;
    if (!subscriptions?.length) return true; // newsletter has rights but not user
    // both newsletter and user have rights
    if (every(newsletter.subscriptions, (sub) => subscriptions.includes(sub))) return false; // user has all all needed subscriptions to read the newsletter
    return true;
  }, [newsletter.subscriptions, user.subscriptions]);
}
