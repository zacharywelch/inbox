import EmailListItem from './EmailListItem'

export default function EmailList({ 
  emails, 
  selectedEmailId, 
  onSelectEmail,
  onToggleStar
}) {
  if (!emails?.length) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-xl mb-2">Your inbox is empty</p>
          <p>No emails to display at this time</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="divide-y divide-gray-200">
        {emails.map(email => (
          <EmailListItem
            key={email.id}
            email={email}
            isSelected={email.id === selectedEmailId}
            onSelectEmail={onSelectEmail}
            onToggleStar={onToggleStar}
          />
        ))}
      </div>
    </div>
  )
}
