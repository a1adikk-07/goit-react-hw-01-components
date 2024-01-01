import user from '../components/data/user.json';
import data from '../components/data/data.json';
import friends from '../components/data/friends.json';
import transactions from '../components/data/transactions.json';

import { Profile } from '../components/profile/profile';
import { Statistics } from '../components/statistic/statistics';
import { FriendList } from '../components/friendsList/friendList';
import { TransactionHistory } from '../components/transactionHistory/transactionHistory';

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
      <div style={{ marginTop: '15px' }}></div>
      <FriendList friends={friends} />
      <div style={{ marginTop: '15px' }}></div>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
