import {
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
} from '../../mocks/user';
import { UserType } from '../../types/User';

export const siteMapping: Record<string, string> = {
  DEN: 'Les échos',
  LAN: 'Le Parisien',
  DAN: 'Investir',
  SAN: 'Boursier.com',
};

type UserOption = {
  text: string;
  value: string;
  user: UserType;
};

export const userOptions: UserOption[] = [
  {
    text: 'Utilisateur sans abonnements',
    value: 'user-without-subscriptions',
    user: USER_WITHOUT_SUBSCRIPTION,
  },
  {
    text: 'Utilisateur avec un abonnement',
    value: 'user-with-one-subscription',
    user: USER_WITH_ONE_SUBSCRIPTION,
  },
  {
    text: 'Utilisateur avec plusieurs abonnements',
    value: 'user-with-multiple-subscriptions',
    user: USER_WITH_MULTIPLE_SUBSCRIPTION,
  },
];
