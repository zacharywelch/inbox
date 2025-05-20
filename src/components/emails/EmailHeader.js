export default function EmailHeader({ unreadCount, totalCount }) {
  return (
    <div className="bg-gray-50 p-4 border-b">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-medium text-lg">Inbox</h2>
          <div className="text-sm text-gray-500">
            {unreadCount > 0 ? (
              <span>{unreadCount} unread of {totalCount} total</span>
            ) : (
              <span>No unread messages</span>
            )}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm">
            Refresh
          </button>
          <button className="px-3 py-1 bg-indigo-600 text-white hover:bg-indigo-700 rounded text-sm">
            New Email
          </button>
        </div>
      </div>
    </div>
  )
}
