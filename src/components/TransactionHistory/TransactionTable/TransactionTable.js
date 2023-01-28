import PropTypes from 'prop-types';
import { TransactionBody, TransactionRow } from './TransactionTable.styled'

function TransactionTable ({type, amount, currency}) {
    return (
       <TransactionRow>
        <TransactionBody>{type}</TransactionBody>
        <TransactionBody>{amount}</TransactionBody>
        <TransactionBody>{currency}</TransactionBody>
     </TransactionRow> 
     )}
   
export default TransactionTable;

TransactionTable.propTypes = {
   type: PropTypes.string.isRequired,
   amount: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired,

}