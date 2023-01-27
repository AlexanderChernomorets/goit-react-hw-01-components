import PropTypes from 'prop-types';

function TransactionTable ({type, amount, currency}) {
    return (
       <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
     </tr> 
     )}
   
export default TransactionTable;

TransactionTable.propTypes = {
   type: PropTypes.string.isRequired,
   amount: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired,

}