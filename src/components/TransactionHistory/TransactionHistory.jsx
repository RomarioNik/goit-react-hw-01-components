import PropTypes from "prop-types";
import { firstLetterToUppercase } from "../../utils";
import {
  Table,
  TableHead,
  TableRowHead,
  TableHeadCell,
  TableBody,
  TableRowBody,
  TableBodyCell,
} from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRowHead>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </TableRowHead>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRowBody key={id}>
            <TableBodyCell>{firstLetterToUppercase(type)}</TableBodyCell>
            <TableBodyCell>{amount}</TableBodyCell>
            <TableBodyCell>{currency}</TableBodyCell>
          </TableRowBody>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
