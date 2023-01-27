import PropTypes from 'prop-types';


function Statistics({title, children}) {
    return(
      <section class="statistics">
      <h2 class="title">{title}</h2>
      {children}
    </section>)
        
    
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.shape).isRequired,
}