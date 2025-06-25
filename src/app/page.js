"use client"
import { useState, useMemo } from 'react'
import EmailList from '@/components/emails/EmailList'
import EmailHeader from '@/components/emails/EmailHeader'
import EmailDetail from '@/components/emails/EmailDetail'
import emailsData from '@/data/emails'

export default function Home() {
  const [emails, setEmails] = useState(emailsData)
  const [selectedEmailId, setSelectedEmailId] = useState(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

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

  const handleRefresh = async() => {
    setIsRefreshing(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setEmails(emailsData)
    setSelectedEmailId(null)
    setIsRefreshing(false)
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Email Inbox</h1>

        {/* Main Email Interface */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[calc(100vh-8rem)]">
          <EmailHeader
            unreadCount={unreadCount}
            totalCount={totalCount}
            onRefresh={handleRefresh}
            isRefreshing={isRefreshing}
          />

          {/* Split Layout: List + Detail */}
          <div className="flex h-full">
            {/* Email List Panel */}
            <div className="w-2/5 border-r border-gray-200 flex flex-col">
              <EmailList
                emails={emails}
                selectedEmailId={selectedEmailId}
                onSelectEmail={handleSelectEmail}
                onToggleStar={handleToggleStar}
              />
            </div>

            {/* Email Detail Panel */}
            <div className="w-3/5 flex flex-col">
              <EmailDetail email={selectedEmail} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
