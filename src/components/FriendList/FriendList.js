import PropTypes from 'prop-types';

function FriendList({friends}) {
    return(
    <ul class="friend-list">
        {friends.map(friend =>(
           <li class="item">
           <span class="status"></span>
           <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
           <p class="name">{friend.name}</p>
         </li>
        ))}
    </ul>
    )
}

export default FriendList;

FriendList.propTypes ={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}