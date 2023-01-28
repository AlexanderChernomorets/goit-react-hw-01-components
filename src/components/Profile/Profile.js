import PropTypes from 'prop-types';
import { RiUserFollowFill } from "react-icons/ri";
import { ImEye } from "react-icons/im";
import { BiLike } from "react-icons/bi";
import { Prof, Image, Description, Name, Tag, Location, Stats, StatsItem, Quantity, SpecsItem  } from './Profile.styled';


function Profile({ username, tag, location, avatar, stats }) {
   
    return( 
        <Prof>
  <Description>
    <Image
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <StatsItem>
      <SpecsItem>
      <RiUserFollowFill/>
      </SpecsItem>
      <Quantity> {stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
    <SpecsItem>
    <ImEye/>
    </SpecsItem>
      <Quantity> {stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
    <SpecsItem>
    <BiLike/>
    </SpecsItem>
      <Quantity> {stats.likes}</Quantity>
    </StatsItem>
  </Stats>
</Prof>
    )
    
}

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.shape).isRequired,

}
