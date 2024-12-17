import { useState } from "react";
import ActivityList from "./components/ActivityList";
import ActivityTabSwitcher from "./components/ActivityTabSwitcher";
import TopRightMenu from "../../components/TopRightMenu";

const Activity = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [transactions, setTransactions] = useState([
    {
      type: "transfer",
      status: "Successful",
      amount: 52000,
      recipient: "ADEJUMOBI KEHINDE",
      transactionId: "123456789",
      timestamp: "2024-11-25T23:59:00",
      entry: "outgoing",
    },
    {
      type: "airtime",
      status: "Pending",
      amount: 1500,
      recipient: "08012345678",
      transactionId: "987654321",
      timestamp: "2024-11-26T12:30:00",
      entry: "outgoing",
    },
    {
      type: "deposit",
      status: "Failed",
      amount: 100000,
      recipient: "Bank XYZ",
      transactionId: "456789123",
      timestamp: "2024-11-26T08:15:00",
      entry: "incoming",
    },
    {
      type: "subscription",
      status: "Successful",
      amount: 3000,
      recipient: "Streaming Service",
      transactionId: "321654987",
      timestamp: "2024-11-26T14:45:00",
      entry: "outgoing",
    },
    {
      type: "transfer",
      status: "Successful",
      amount: 7500,
      recipient: "OLUWASEUN ADEYEMI",
      transactionId: "654123789",
      timestamp: "2024-11-27T09:00:00",
      entry: "outgoing",
    },
  ]);

  return (
    <div className="px-6 pt-10">
      <div className="flex justify-between align-middle items-center mb-6">
        <div className="text-3xl md:text-5xl">Transactions</div>
        <TopRightMenu styles="" />
      </div>
      <div className="w-full flex-[2.5]">
        <ActivityTabSwitcher
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setTransactions={setTransactions}
          transactions={transactions}
        />
        <ActivityList activeTab={activeTab} transactions={transactions} />
      </div>
    </div>
  );
};

export default Activity;
