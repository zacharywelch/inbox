export default function EmailListItem({ email }) {
  // Format the date to a readable string
  const formattedDate = new Date(email.date).toLocaleDateString()
  
  return (
    <div className={`p-4 hover:bg-gray-50 cursor-pointer
                    ${email.read ? 'bg-white' : 'bg-blue-50'}`}>
      <div className="flex justify-between">
        <div className="font-medium">{email.from}</div>
        <div className="text-sm text-gray-500">{formattedDate}</div>
      </div>
      <div className="font-medium">{email.subject}</div>
      <div className="text-sm text-gray-600 truncate">{email.body}</div>
    </div>
  )
}
