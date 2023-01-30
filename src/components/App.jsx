import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import StatsList from './Statistics/StatsList/StatsList';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import items from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        key={user.username}
        tag={user.tag}
        username={user.username}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats">
        <StatsList key={data.id} stats={data} />
      </Statistics>
      <FriendList friends={friends} />
      <TransactionHistory key={items.id} items={items} />
    </div>
  );
};
