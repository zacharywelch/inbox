import EmailListItem from './EmailListItem'

export default function EmailList({ emails }) {
  return (
    <div className="divide-y">
      {emails.map(email => (
        <EmailListItem key={email.id} email={email} />
      ))}
    </div>
  )
}
