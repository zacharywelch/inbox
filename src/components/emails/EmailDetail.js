import { formatDate } from '@/utils/dates'

export default function EmailDetail({ email }) {
  if (!email) {
    return (
      <div className="p-8 text-center text-gray-500">
        <div className="mb-4">
          <svg
            className="w-16 h-16 mx-auto text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium mb-2">No email selected</h3>
        <p>Select an email from the list to view its contents</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Email Header Section */}
      <div className="border-b bg-gray-50 p-4">
        <div className="flex items-start justify-between mb-3">
          <h1 className="text-xl font-semibold text-gray-900 leading-tight pr-4">
            {email.subject}
          </h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500 whitespace-nowrap">
            <span>{formatDate(email.date)}</span>
            {email.starred && (
              <span className="text-yellow-500" title="Starred">★</span>
            )}
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <span className="font-medium text-gray-700 w-16">From:</span>
            <span className="text-gray-900">{email.from}</span>
          </div>

          {/* Labels Section */}
          {email.labels?.length && (
            <div className="flex items-center">
              <span className="font-medium text-gray-700 w-16">Labels:</span>
              <div className="flex flex-wrap gap-1">
                {email.labels.map((label) => (
                  <span
                    key={label}
                    className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Email Body Section */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="whitespace-pre-wrap text-gray-900 leading-relaxed">
          {email.body}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="border-t bg-gray-50 p-4">
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
            Reply
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
            Forward
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors hover:text-red-600 hover:border-red-300">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
