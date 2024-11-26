import { useState } from "react";
import ActivityList from "./components/ActivityList";
import ActivityTabSwitcher from "./components/ActivityTabSwitcher";

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
      entry:'outgoing'
    },
    {
      type: "airtime",
      status: "Pending",
      amount: 1500,
      recipient: "08012345678",
      transactionId: "987654321",
      timestamp: "2024-11-26T12:30:00",
      entry:'outgoing'
    },
    {
      type: "deposit",
      status: "Failed",
      amount: 100000,
      recipient: "Bank XYZ",
      transactionId: "456789123",
      timestamp: "2024-11-26T08:15:00",
      entry:'incoming'
    },
    {
      type: "subscription",
      status: "Successful",
      amount: 3000,
      recipient: "Streaming Service",
      transactionId: "321654987",
      timestamp: "2024-11-26T14:45:00",
      entry:'outgoing'
    },
    {
      type: "transfer",
      status: "Successful",
      amount: 7500,
      recipient: "OLUWASEUN ADEYEMI",
      transactionId: "654123789",
      timestamp: "2024-11-27T09:00:00",
      entry:'outgoing'
    },
  ]);

  return (
    <div className="w-full px-6 pt-12 flex-[2.5]">
      <h1 className="text-3xl font-semibold mb-10">Recent Activity</h1>
      <ActivityTabSwitcher
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setTransactions={setTransactions}
        transactions={transactions}
      />
      <ActivityList activeTab={activeTab} transactions={transactions} />
    </div>
  );
};

export default Activity;
