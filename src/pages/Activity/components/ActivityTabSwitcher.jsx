/* eslint-disable react/prop-types */
const ActivityTabSwitcher = ({activeTab, setActiveTab}) => {

    function switchTab(tab){
        setActiveTab(tab);
        // console.log(transactions)
    }
 
    const TabSwitch = ({tab, text, switchTab, activeTab}) => {
      return(<button
        onClick={() => switchTab(tab)}
        className={`rounded-lg px-4 py-2 text-sm mx-1  ${
          !(activeTab === tab)
            ? "text-gray-500 hover:bg-gray-100"
            : "text-white bg-black"
        }`}
      >
        <span>{text}</span>
      </button>)
    };

  return (
    <div>
        <TabSwitch activeTab={activeTab} tab={'all'} text={'All'} switchTab={() => switchTab('all')}/>
        <TabSwitch activeTab={activeTab} tab={'credit'} text={'Received'} switchTab={() => switchTab('credit')}/>
        <TabSwitch activeTab={activeTab} tab={'debit'} text={'Sent'} switchTab={() => switchTab('debit')}/>
    </div>
  );
};
 

export default ActivityTabSwitcher;
