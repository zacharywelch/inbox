"use client"
import EmailList from '@/components/emails/EmailList'
import EmailHeader from '@/components/emails/EmailHeader'
import EmailDetail from '@/components/emails/EmailDetail'
import { useEmails } from '@/hooks/useEmails'

export default function Home() {
  const {
    emails,
    selectedEmail,
    selectedEmailId,
    isRefreshing,
    unreadCount,
    totalCount,
    handleSelectEmail,
    handleToggleStar,
    handleRefresh,
    handleBack
  } = useEmails()

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-16 px-8 max-w-6xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[calc(100vh-8rem)] grid grid-rows-[auto_1fr] md:grid-cols-[2fr_3fr]">
          <div className="col-span-full">
            <EmailHeader
              unreadCount={unreadCount}
              totalCount={totalCount}
              onRefresh={handleRefresh}
              isRefreshing={isRefreshing}
            />
          </div>
          <div className={`
            overflow-hidden border-b md:border-b-0 md:border-r border-gray-200
            flex flex-col
            ${selectedEmail && 'hidden md:flex'}
          `}>
            <EmailList
              emails={emails}
              selectedEmailId={selectedEmailId}
              onSelectEmail={handleSelectEmail}
              onToggleStar={handleToggleStar}
            />
          </div>
          <div className={`
            overflow-hidden
            flex flex-col
            ${!selectedEmail && 'hidden md:flex'}
          `}>
            <EmailDetail
              email={selectedEmail}
              onBack={handleBack}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
