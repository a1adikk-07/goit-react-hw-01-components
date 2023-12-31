import {
  BaseTable,
  Thead,
  Th,
  Tbody,
  Td,
  Tr,
} from '../transactionHistory/transactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <BaseTable className="transaction-history">
      <Thead>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </Thead>

      <Tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </BaseTable>
  );
};
