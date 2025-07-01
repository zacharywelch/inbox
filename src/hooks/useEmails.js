import { useState, useMemo, useCallback } from 'react'
import emailsData from '@/data/emails'

export function useEmails() {
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

  const handleSelectEmail = useCallback((emailId) => {
    setSelectedEmailId(emailId)
    setEmails(prevEmails => prevEmails.map(email =>
      email.id === emailId
        ? {...email, read: true}
        : email
    ))
  }, [])

  const handleToggleStar = useCallback((emailId) => {
    setEmails(prevEmails => prevEmails.map(email =>
      email.id === emailId
        ? {...email, starred: !email.starred}
        : email
    ))
  }, [])

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setEmails(emailsData)
    setSelectedEmailId(null)
    setIsRefreshing(false)
  }, [])

  const handleBack = useCallback(() => {
    setSelectedEmailId(null)
  }, [])

  return {
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
  }
}
