import { useEffect, useState } from 'react';
import { Grid, Header, Loader } from 'semantic-ui-react';

import { useGroupBy, useKeyBy } from '../../hooks/hooks';
import { NewsletterType } from '../../types/Newsletter';
import './NewslettersScreen.scss';
import { fetchNewsletters } from './api';
import { nsClass } from './bem';
import { NewslettersHeader } from './components/Header';
import { Newsletter } from './components/Newsletter';
import { UserSelector } from './components/UserSelector';
import { siteMapping, userOptions } from './data';

export const NewslettersScreen = () => {
  const [mode, setMode] = useState<string>('user-without-subscriptions');
  const [newsletters, setNewsletters] = useState<NewsletterType[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useKeyBy(userOptions, 'value')[mode];

  useEffect(() => {
    const loadNewsletters = async () => {
      const data = await fetchNewsletters();
      setNewsletters(data as NewsletterType[]);
      setLoading(false);
    };
    loadNewsletters();
  }, []);

  const newslettersBySite = useGroupBy(newsletters, 'site');

  return (
    <div className={nsClass()}>
      <UserSelector value={mode} onChange={setMode} />
      <NewslettersHeader />
      {loading ? (
        <Loader active inline="centered" />
      ) : (
        Object.entries(newslettersBySite).map(([site, items]) => {
          return (
            <div key={site} className={nsClass('site')}>
              <Header as="h3" className="header">
                {siteMapping[site]}
              </Header>
              <div className="separator" />
              <Grid stackable columns={3}>
                {items.map((newsletter: NewsletterType) => (
                  <Grid.Column className="column" key={newsletter.id}>
                    <Newsletter newsletter={newsletter} user={user} />
                  </Grid.Column>
                ))}
              </Grid>
            </div>
          );
        })
      )}
    </div>
  );
};
