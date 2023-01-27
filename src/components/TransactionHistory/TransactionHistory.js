import PropTypes from 'prop-types';
import TransactionTable from "./TransactionTable/TransactionTable"


function TransactionHistory({items}) {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({type, amount, currency, id}) => (
       <TransactionTable key={id}
       type={type}
       currency={currency}
       amount={amount}/> 
       ))}
   
  </tbody>
  
</table>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}