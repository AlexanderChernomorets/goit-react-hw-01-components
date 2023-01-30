import PropTypes from 'prop-types';
import { StatList, StatItem, Label, Percentage } from './StatList.styled';

function StatsList({ stats }) {
  return (
    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}</Percentage>
        </StatItem>
      ))}
    </StatList>
  );
}

export default StatsList;

StatsList.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
