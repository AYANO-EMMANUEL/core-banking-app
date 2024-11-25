/* eslint-disable react/prop-types */
const ActivityTabSwitcher = ({activeTab, setActiveTab, transactions}) => {

    function switchTab(tab){
        setActiveTab(tab);
        // console.log(transactions)
    }

    const TabSwitch = ({tab, text, switchTab, activeTab}) => {
      return(<button
        onClick={() => switchTab(tab)}
        className={`rounded-lg px-4 py-2 text-sm ${
          !(activeTab === tab)
            ? "text-gray-500"
            : "text-white bg-black"
        }`}
      >
        <span>{text}</span>
      </button>)
    };

  return (
    <div>
        <TabSwitch activeTab={activeTab} tab={'all'} text={'All'} switchTab={() => switchTab('all')}/>
        <TabSwitch activeTab={activeTab} tab={'incoming'} text={'Incoming'} switchTab={() => switchTab('incoming')}/>
        <TabSwitch activeTab={activeTab} tab={'outgoing'} text={'Outgoing'} switchTab={() => switchTab('outgoing')}/>
    </div>
  );
};


export default ActivityTabSwitcher;
