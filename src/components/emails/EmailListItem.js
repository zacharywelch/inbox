import { formatDate } from '@/utils/dates'

export default function EmailListItem({ email, isSelected, onSelect }) {
  return (
    <div 
      className={`p-4 hover:bg-gray-50 cursor-pointer
                 ${email.read ? 'bg-white' : 'bg-blue-50'}
                 ${isSelected ? 'border-l-4 border-indigo-500' : ''}`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-start">
        <div className="flex-grow min-w-0">
          <div className="flex items-center">
            {email.starred && (
              <span className="text-yellow-500 mr-2">★</span>
            )}
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
        
        <div className="text-sm text-gray-500 whitespace-nowrap ml-4 shrink-0">
          {formatDate(email.date)}
        </div>
      </div>
    </div>
  )
}
