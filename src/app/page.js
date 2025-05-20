import EmailList from '@/components/emails/EmailList'
import EmailHeader from '@/components/emails/EmailHeader'
import emails from '@/data/emails'

export default function Home() {
  // Calculate counts for the header
  const unreadCount = emails.filter(email => !email.read).length
  const totalCount = emails.length
  
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Email Inbox</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <EmailHeader 
            unreadCount={unreadCount} 
            totalCount={totalCount} 
          />
          <EmailList emails={emails} />
        </div>
      </div>
    </main>
  )
}
