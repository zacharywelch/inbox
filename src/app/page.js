"use client"
import { useState, useMemo } from 'react'
import EmailList from '@/components/emails/EmailList'
import EmailHeader from '@/components/emails/EmailHeader'
import EmailDetail from '@/components/emails/EmailDetail'
import emailsData from '@/data/emails'

export default function Home() {
  const [emails, setEmails] = useState(emailsData)
  const [selectedEmailId, setSelectedEmailId] = useState(null)

  const selectedEmail = useMemo(() =>
    emails.find(email => email.id === selectedEmailId),
    [emails, selectedEmailId]
  )

  const unreadCount = useMemo(() =>
    emails.filter(email => !email.read).length,
    [emails]
  )

  const totalCount = useMemo(() => emails.length, [emails])

  const handleSelectEmail = (emailId) => {
    setSelectedEmailId(emailId)
    setEmails(prevEmails => prevEmails.map(email =>
      email.id === emailId
        ? {...email, read: true}
        : email
    ))
  }

  const handleToggleStar = (emailId) => {
    setEmails(prevEmails => prevEmails.map(email =>
      email.id === emailId
        ? {...email, starred: !email.starred}
        : email
    ))
  }

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
                onSelectEmail={handleSelectEmail}
                onToggleStar={handleToggleStar}
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
