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
  }
]

export default emails
