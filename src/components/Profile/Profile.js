import PropTypes from 'prop-types';
import { Prof, Image, Description, Name, Tag, Location, Stats, StatsItem, Quantity  } from './Profile.styled';

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
      <span class="label">Fol</span>
      <Quantity> {stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <span class="label">Vie</span>
      <Quantity> {stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <span class="label">Lik</span>
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
