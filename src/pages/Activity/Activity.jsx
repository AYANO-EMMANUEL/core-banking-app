import ActivityList from "./components/ActivityList"
import ActivityTabSwitcher from "./components/ActivityTabSwitcher"

const Activity = () => {
  return (
    <div className="w-full py-5 px-10">
      <ActivityTabSwitcher />
      <ActivityList />
    </div>
  )
}

export default Activity


