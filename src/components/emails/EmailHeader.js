export default function EmailHeader({
  unreadCount,
  totalCount,
  onRefresh,
  isRefreshing
}) {
  return (
    <div className="bg-gray-50 p-4 border-b border-gray-200">
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
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className={`px-3 py-1 rounded text-sm flex items-center gap-1 transition-colors
              ${isRefreshing
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
          >
            {isRefreshing ? (
              <>
                <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                Refreshing...
              </>
            ) : (
              <span>Refresh</span>
            )}
          </button>
          <button className="px-3 py-1 bg-indigo-600 text-white hover:bg-indigo-700 rounded text-sm">
            New Email
          </button>
        </div>
      </div>
    </div>
  )
}
