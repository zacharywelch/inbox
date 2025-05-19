export default function EmailHeader() {
  return (
    <div className="bg-gray-50 p-4 border-b">
      <div className="flex justify-between items-center">
        <div className="font-medium">Inbox (5)</div>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-200 rounded">
            Refresh
          </button>
          <button className="p-2 hover:bg-gray-200 rounded">
            Archive
          </button>
        </div>
      </div>
    </div>
  )
}
