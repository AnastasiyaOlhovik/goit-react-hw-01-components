import { Profile } from './components/Profile/Profile';
import user from './components/Profile/user';
import { Statistics } from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';
import { FriendList } from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';




export const App = () => {
  return (
    <div>

      <Profile profile={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;

  
    </div>
  );
};
