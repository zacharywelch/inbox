import { formatDate } from '@/utils/dates'

export default function EmailListItem({
  email,
  isSelected,
  onSelectEmail,
  onToggleStar
}) {
  const handleToggleStar = (e) => {
    e.stopPropagation()
    onToggleStar(email.id)
  }

  return (
    <div
      className={`p-4 hover:bg-gray-50 cursor-pointer
                 ${email.read ? 'bg-white' : 'bg-blue-50'}
                 ${isSelected ? 'border-l-4 border-indigo-500' : ''}`}
      onClick={() => onSelectEmail(email.id)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-grow min-w-0">
          <div className="flex items-center">
            <button
              onClick={handleToggleStar}
              className="text-gray-400 hover:text-yellow-500 mr-2 focus:outline-none"
              aria-label={email.starred ? "Unstar email" : "Star email"}
            >
              {email.starred
                ? <span className="text-yellow-500">★</span>
                : <span>☆</span>}
            </button>
            <span className={`font-medium ${!email.read ? 'font-bold' : ''}`}>
              {email.from}
            </span>
          </div>

          <div className={`${!email.read ? 'font-bold' : ''}`}>
            {email.subject}
          </div>

          <div className="text-sm text-gray-600 truncate mt-1">
            {email.body}
          </div>

          {email.labels?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {email.labels.map(label => (
                <span
                  key={label}
                  className="px-2 py-0.5 text-xs rounded-full bg-gray-200 text-gray-700"
                >
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center">
          <div className="text-sm text-gray-500 whitespace-nowrap mr-3">
            {formatDate(email.date)}
          </div>
          {email.read
            ? <span className="text-gray-400">○</span>
            : <span className="text-blue-500">●</span>}
        </div>
      </div>
    </div>
  )
}
