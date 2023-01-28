import PropTypes from 'prop-types';
import { Statistic, StatTitle } from './Statistic.styled';


function Statistics({title, children}) {
    return(
      <Statistic>
      <StatTitle>{title}</StatTitle>
      {children}
    </Statistic>)
        
    
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.shape).isRequired,
}