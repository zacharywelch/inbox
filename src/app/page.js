import EmailList from '@/components/emails/EmailList'
import EmailHeader from '@/components/emails/EmailHeader'
import emails from '@/data/emails'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Email Inbox</h1>
        <div className="bg-white rounded-lg shadow-md">
          <EmailHeader />
          <EmailList emails={emails} />
        </div>
      </div>
    </main>
  )
}
