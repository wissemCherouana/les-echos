import bem from 'bem-cn';
import { FC } from 'react';
import { Button } from 'semantic-ui-react';
import { NewsletterType } from '../../../types/Newsletter';
import { UserType } from '../../../types/User';
import { useHasUserToFollowNewsletter } from '../hooks';
import { nsClass } from '../bem';

type NewsletterProps = {
  newsletter: NewsletterType;
  user: UserType;
};

export const Newsletter: FC<NewsletterProps> = (props) => {
  const { newsletter, user } = props;
  const { title, description, image } = newsletter;
  const hasUserToFollowNewsletter = useHasUserToFollowNewsletter(user, newsletter);

  const handleClickButton = () => {
    if (hasUserToFollowNewsletter) window.open('https://abonnement.lesechos.fr/', '_blank');
    else console.log('newseltter:open', title);
  };

  return (
    <div className={nsClass('newsletter')}>
      <div className={'background'} style={{ backgroundImage: `url(${image})` }}>
        <div className="title">{title}</div>
      </div>
      <div className="description">{description}</div>
      <Button className={hasUserToFollowNewsletter ? 'follow' : ''} onClick={handleClickButton}>
        {hasUserToFollowNewsletter ? "S'abonner" : "S'inscrire"}
      </Button>
    </div>
  );
};
