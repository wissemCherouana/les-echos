import { Header } from 'semantic-ui-react';
import { nsClass } from '../bem';

export const NewslettersHeader = () => {
  return (
    <div className={nsClass('header')}>
      <Header as="h2">Newsletters</Header>
      Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques
      satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et
      gérer plus facilement l’inscription à vos newsletters.
    </div>
  );
};
