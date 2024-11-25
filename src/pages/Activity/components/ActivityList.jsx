/* eslint-disable react/prop-types */
import TransactionPreviewItem from "./TransactionPreviewItem";

const ActivityList = ({ transactions, activeTab }) => {
  return (
    <div>
      <table className="w-full mt-5 rounded-t-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-start p-3">Transaction name</th>
            <th className="text-start p-3">Date</th>
            <th className="text-start p-3">Type</th>
            <th className="text-start p-3">Amount</th>
            <th className="text-start p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            (transaction, index) =>
              (activeTab === transaction.entry || activeTab === "all") && (
                <TransactionPreviewItem
                  key={transaction.transactionId || index}
                  type={transaction.type}
                  status={transaction.status}
                  amount={transaction.amount}
                  recipient={transaction.recipient}
                  transactionId={transaction.transactionId}
                  timestamp={transaction.timestamp}
                  entry={transaction.entry}
                />
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityList;
