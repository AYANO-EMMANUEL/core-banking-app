
const RecentRecipients = () => {
  const recipients = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'Lucy Gray' },
    { id: 5, name: 'Michael Scott' },
  ];

  return (
    <div className="recent-recipients-container py-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Recent Recipients</h2>
      <div className="recipients-list flex overflow-y-auto gap-6">
        {recipients.map((recipient) => (
          <div key={recipient.id} className="recipient-item flex flex-col items-center">
            {/* Circular Avatar */}
            <img
              src={`https://via.placeholder.com/100?text=${recipient.name.charAt(0)}`}
              alt={recipient.name}
              className="w-16 aspect-square rounded-full object-cover"
            />
            <p className="mt-1 font-bold text-center text-sm">{recipient.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentRecipients;
