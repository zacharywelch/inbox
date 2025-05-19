export default function EmailDetail({ email }) {
  if (!email) return null
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{email.subject}</h2>
      <div className="my-2">
        <span className="font-medium">From: </span>
        {email.from}
      </div>
      <div className="my-4">{email.body}</div>
    </div>
  )
}
