import PropTypes from 'prop-types';
import TransactionTable from './TransactionTable/TransactionTable';
import { Table, TableHead } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <TransactionTable
            key={id}
            type={type}
            currency={currency}
            amount={amount}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
