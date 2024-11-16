import { IoArrowUpCircle } from "react-icons/io5";
import TransactionPreviewItem from "./TransactionPreviewItem";

const ActivityList = () => {
  const transactions = [
    {
      type: "transfer",
      status: "Successful",
      amount: 52000,
      recipient: "ADEJUMOBI KEHINDE",
      transactionId: "123456789",
      timestamp: "2024-11-25T23:59:00",
    },
    {
      type: "airtime",
      status: "Pending",
      amount: 1500,
      recipient: "08012345678",
      transactionId: "987654321",
      timestamp: "2024-11-26T12:30:00",
    },
    {
      type: "deposit",
      status: "Failed",
      amount: 100000,
      recipient: "Bank XYZ",
      transactionId: "456789123",
      timestamp: "2024-11-26T08:15:00",
    },
    {
      type: "subscription",
      status: "Successful",
      amount: 3000,
      recipient: "Streaming Service",
      transactionId: "321654987",
      timestamp: "2024-11-26T14:45:00",
    },
    {
      type: "transfer",
      status: "Successful",
      amount: 7500,
      recipient: "OLUWASEUN ADEYEMI",
      transactionId: "654123789",
      timestamp: "2024-11-27T09:00:00",
    },
  ];

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
          {/* <tr>
                    <td className="p-3">
                        <div className="flex gap-2 items-center">
                            <img src="/assets/cards.png" alt="" className="rounded-full w-8 md:w-12 object-cover object-center"/>
                            <div>
                                <h3>Transfer to <span className="uppercase font-bold">ADEJUMOBI KEHINDE</span></h3>
                                <p className="text-xs text-gray-400">ID: 123456789</p>
                            </div>
                        </div>
                    </td>
                    <td className="p-3">
                        <div>
                            <p className="text-sm font-semibold text-dark">25 Nov 2024</p>
                            <p className="text-xs text-gray-400">11:59 PM</p>
                        </div>
                    </td>
                    <td className="p-3">
                        <p className="text-red-500 font-semibold"><IoArrowUpCircle className="inline mr-2"/> Outgoing</p>
                    </td>
                    <td className="p-3">NGN 52, 000</td>
                    <td className="p-3">
                        <p className="bg-green-300 text-green-600 px-2 py-1 rounded-xl text-sm w-fit">Succesful</p>
                    </td>
                </tr> */}
          {transactions.map((transaction, index) => (
            <TransactionPreviewItem
              key={transaction.transactionId || index}
              type={transaction.type}
              status={transaction.status}
              amount={transaction.amount}
              recipient={transaction.recipient}
              transactionId={transaction.transactionId}
              timestamp={transaction.timestamp}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityList;

// Things to think about
// - Transaction name - Transfer, Airtime, Subscriptions(bills),
// - Type- (Ingoing or Outgoing )
// - Recipient
// - Date and Time
// - Amount
