import user from '../components/data/user.json';
import data from '../components/data/data.json';
import friends from '../components/data/friends.json';
import transactions from '../components/data/transactions.json';

import { Profile } from '../components/profile/profile';
import { Statistics } from '../components/statistic/statistics';
import { friendList } from '../components/friendsList/friendList';
import { transactionHistory } from '../components/transactionHistory/transactionHistory';

export const App = () => {
  return (
    <div style={{ padding: '30px 0px' }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div style={{ marginTop: '15px' }}></div>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
