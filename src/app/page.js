"use client"
import { useState } from 'react'
import EmailList from '@/components/emails/EmailList'
import EmailHeader from '@/components/emails/EmailHeader'
import EmailDetail from '@/components/emails/EmailDetail'
import emails from '@/data/emails'

export default function Home() {
  const [selectedEmailId, setSelectedEmailId] = useState(null)
  const selectedEmail = emails.find(email => email.id === selectedEmailId)
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
          <div className="flex">
            <div className="w-1/2 border-r">
              <EmailList 
                emails={emails}
                selectedEmailId={selectedEmailId} 
                onSelectEmail={setSelectedEmailId}
              />
            </div>
            <div className="w-1/2">
              <EmailDetail email={selectedEmail} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
