import PropTypes from 'prop-types';

function StatsList({stats}) {
    return(
        <ul class="stat-list">
          {stats.map(({ id, label, percentage }) =>(
            <li key={id} >
                <span class="label">{label}</span>
                <span class="percentage">{percentage}</span>
            </li>))}  
        </ul>
    );
   
    
}

export default StatsList;

StatsList.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

}