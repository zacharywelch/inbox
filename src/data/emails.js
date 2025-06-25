// Sample email data
const emails = [
  {
    id: 1,
    from: "team@github.com",
    subject: "Your pull request has been merged",
    body: "The pull request #123 for project 'react-email-client' has been merged successfully.",
    date: new Date().setHours(10, 0, 0, 0),
    read: false,
    starred: true,
    labels: ["work", "important"]
  },
  {
    id: 2,
    from: "newsletter@javascript.com",
    subject: "This week in JavaScript",
    body: "Learn about the latest features in JavaScript and upcoming conferences.",
    date: new Date().setDate(new Date().getDate() - 1),
    read: true,
    starred: false,
    labels: ["newsletter"]
  },
  {
    id: 3,
    from: "notifications@linkedin.com",
    subject: "You have 5 new connection requests",
    body: "5 people want to connect with you on LinkedIn. View all your pending invitations.",
    date: "2025-05-16T22:45:00",
    read: true,
    starred: false,
    labels: ["social"]
  },
  {
    id: 4,
    from: "support@tailwindcss.com",
    subject: "Your subscription is expiring soon",
    body: "Your Tailwind CSS subscription will expire in 7 days. Renew now to keep access.",
    date: "2025-05-16T11:20:00",
    read: false,
    starred: true,
    labels: ["important"]
  },
  {
    id: 5,
    from: "noreply@amazon.com",
    subject: "Your order has shipped",
    body: "Your recent order #A123456 has shipped and will arrive on Monday.",
    date: "2025-05-15T16:35:00",
    read: false,
    starred: false,
    labels: ["shopping"]
  },
  // Add more emails to test scrolling
  {
    id: 6,
    from: "security@bank.com",
    subject: "Security alert: New login detected",
    body: "We detected a new login to your account from Chrome on Mac.",
    date: "2025-05-15T14:22:00",
    read: true,
    starred: false,
    labels: ["security"]
  },
  {
    id: 7,
    from: "team@slack.com",
    subject: "Weekly digest: 15 new messages",
    body: "Here's what happened in your workspace this week.",
    date: "2025-05-15T09:15:00",
    read: false,
    starred: false,
    labels: ["work"]
  },
  {
    id: 8,
    from: "calendar@google.com",
    subject: "Meeting reminder: Team standup in 30 minutes",
    body: "Don't forget about your meeting with the development team.",
    date: "2025-05-14T08:30:00",
    read: true,
    starred: true,
    labels: ["work", "meeting"]
  },
  {
    id: 9,
    from: "billing@hosting.com",
    subject: "Invoice #2024-001234 is ready",
    body: "Your monthly hosting invoice is now available for download.",
    date: "2025-05-14T06:00:00",
    read: false,
    starred: false,
    labels: ["billing"]
  },
  {
    id: 10,
    from: "updates@npm.com",
    subject: "Weekly package update summary",
    body: "5 of your packages have available updates this week.",
    date: "2025-05-13T12:00:00",
    read: true,
    starred: false,
    labels: ["development"]
  },
  {
    id: 11,
    from: "alerts@monitoring.com",
    subject: "Server performance alert",
    body: "CPU usage on server-01 exceeded 85% for 10 minutes.",
    date: "2025-05-13T15:45:00",
    read: false,
    starred: true,
    labels: ["alerts", "important"]
  },
  {
    id: 12,
    from: "newsletter@reactjs.org",
    subject: "React 19 is now available!",
    body: "Learn about the new features and breaking changes in React 19.",
    date: "2025-05-12T18:30:00",
    read: true,
    starred: true,
    labels: ["newsletter", "development"]
  },
  {
    id: 13,
    from: "hr@company.com",
    subject: "Employee handbook update",
    body: "Please review the updated remote work policies in section 4.2.",
    date: "2025-05-12T10:15:00",
    read: false,
    starred: false,
    labels: ["hr", "company"]
  },
  {
    id: 14,
    from: "support@figma.com",
    subject: "New collaboration features available",
    body: "Check out the latest updates to improve team collaboration.",
    date: "2025-05-11T16:20:00",
    read: true,
    starred: false,
    labels: ["design", "tools"]
  },
  {
    id: 15,
    from: "community@stackoverflow.com",
    subject: "Your answer was accepted!",
    body: "Congratulations! Your JavaScript answer received 25+ upvotes.",
    date: "2025-05-11T13:42:00",
    read: false,
    starred: true,
    labels: ["community"]
  }
]

export default emails
