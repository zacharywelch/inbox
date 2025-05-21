import EmailListItem from './EmailListItem'

export default function EmailList({ emails, selectedEmailId, onSelectEmail }) {
  if (!emails?.length) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p className="text-xl mb-2">Your inbox is empty</p>
        <p>No emails to display at this time</p>
      </div>
    )
  }
  
  return (
    <div className="divide-y divide-gray-200">
      {emails.map(email => (
        <EmailListItem 
          key={email.id} 
          email={email} 
          isSelected={email.id === selectedEmailId}
          onSelect={() => onSelectEmail(email.id)}
        />
      ))}
    </div>
  )
}
