import { formatDistanceToNow, isToday, isThisYear, format } from 'date-fns'

/**
 * Formats a date intelligently based on recency:
 * - Recent dates (< 1 hour): "X minutes ago"
 * - Today: "3:45 PM"
 * - This year: "May 18" 
 * - Older: "May 18, 2023"
 * 
 * @param {string|Date} value - The date to format
 * @returns {string} Formatted date string
 */
export function formatDate(value) {
  const date = new Date(value)
  const now = new Date()
  
  // Check if the email is less than 1 hour old
  if (now - date < 60 * 60 * 1000) {
    return formatDistanceToNow(date, { addSuffix: true })
  }
  
  // Today but more than an hour ago
  if (isToday(date)) {
    return format(date, 'h:mm a')
  }
  
  // For this year (but not today)
  if (isThisYear(date)) {
    return format(date, 'MMM d')
  }
  
  // For older messages
  return format(date, 'MMM d, yyyy')
}
