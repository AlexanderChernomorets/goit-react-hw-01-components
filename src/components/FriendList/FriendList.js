import PropTypes from 'prop-types';
import { RiUserLocationLine } from "react-icons/ri";
import { FriendsList, FriendItem, Avatar, Name, SpecsItem } from './FriendList.styled';

function FriendList({friends}) {
    return(
    <FriendsList>
        {friends.map(friend =>(
           <FriendItem>
            <SpecsItem>
            <RiUserLocationLine />
            </SpecsItem>
           <Avatar src={friend.avatar} alt="User avatar" width="48" />
           <Name>{friend.name}</Name>
         </FriendItem>
        ))}
    </FriendsList>
    )
}

export default FriendList;

FriendList.propTypes ={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}