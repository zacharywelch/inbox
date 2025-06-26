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
  },
  {
    id: 100,
    from: "product@company.com",
    subject: "Q4 Product Roadmap & Feature Updates - Detailed Review",
    body: `Hi Team,

I hope this email finds you well. I wanted to provide a comprehensive overview of our Q4 product roadmap and the exciting features we'll be rolling out over the next few months.

Our Q4 roadmap focuses on three key areas: user experience improvements, performance optimizations, and new feature development. We've received tremendous feedback from our user base, and this roadmap directly addresses their most requested features.

1. Advanced Search Functionality

We're implementing a powerful search system that will allow users to:
- Search across all their content with natural language queries
- Filter results by date, type, and custom tags
- Save frequently used searches for quick access
- Export search results in multiple formats

The search functionality will use machine learning to improve results over time, learning from user behavior and preferences.

2. Real-time Collaboration Tools
Building on our existing collaboration features, we're adding:
- Live cursor tracking so team members can see where others are working
- Real-time commenting and suggestion system
- Version history with visual diff comparisons
- Conflict resolution tools for simultaneous edits

This will make our platform a true collaborative workspace where teams can work together seamlessly.

3. Mobile App Enhancements
Our mobile experience is getting a major upgrade:
- Completely redesigned interface optimized for touch
- Offline mode for viewing and editing content
- Push notifications for important updates
- Biometric authentication for enhanced security

Performance Improvements

We've been working hard on performance optimizations that will benefit all users:

Backend Optimizations
- Database query optimization reducing load times by 40%
- Improved caching strategies for frequently accessed data
- Auto-scaling infrastructure to handle traffic spikes
- Background processing for heavy operations

Frontend Improvements
- Lazy loading for large datasets
- Optimized bundle sizes reducing initial load time
- Improved memory management
- Better error handling and recovery

User Experience Updates

Based on extensive user research, we're making several UX improvements:

Navigation Redesign
- Simplified menu structure with clearer categorization
- Contextual navigation that adapts to user workflow
- Improved breadcrumb system for better orientation
- Quick access toolbar for frequently used actions

Accessibility Enhancements
- Full screen reader compatibility
- Keyboard navigation for all functionality
- High contrast mode for better visibility
- Customizable font sizes and spacing

Personalization Features
- Customizable dashboard layouts
- Personal shortcuts and quick actions
- Theme customization options
- Workflow automation tools

Security & Compliance

Security remains a top priority with several new initiatives:

Enhanced Authentication
- Multi-factor authentication with multiple options
- Single sign-on integration with popular providers
- Session management improvements
- Suspicious activity detection

Data Protection
- End-to-end encryption for sensitive data
- Granular permission controls
- Audit logs for all user actions
- GDPR compliance tools for data management

Timeline & Milestones

October 2024
- Advanced search beta release
- Mobile app UI redesign completion
- Performance optimization Phase 1

November 2024
- Real-time collaboration tools beta
- Security enhancements rollout
- Accessibility improvements launch

December 2024
- Full feature release
- Mobile app launch
- Performance optimization Phase 2

Resource Requirements

To deliver on this ambitious roadmap, we'll need:

Development Team
- 2 additional frontend developers
- 1 backend specialist for search functionality
- 1 mobile developer for iOS/Android optimization
- 1 DevOps engineer for infrastructure scaling

Budget Allocation
- Development resources: $150,000
- Infrastructure upgrades: $75,000
- Third-party integrations: $25,000
- Testing and QA: $30,000

Success Metrics

We'll measure success through several key metrics:

User Engagement
- Daily active users increase by 25%
- Session duration improvement of 15%
- Feature adoption rate above 60%
- User satisfaction score above 4.5/5

Performance Metrics
- Page load time under 2 seconds
- 99.9% uptime maintained
- Mobile app store rating above 4.0
- Support ticket reduction by 30%

Risk Assessment

As with any major release, there are potential risks:

Technical Risks
- Integration complexity with existing systems
- Performance impact during transition period
- Potential bugs in new features
- User adoption challenges

Mitigation Strategies
- Extensive testing in staging environments
- Gradual rollout with feature flags
- Comprehensive user training materials
- 24/7 support during launch period

Next Steps

1. Finalize technical specifications for each feature
2. Begin development sprints with dedicated teams
3. Set up beta testing groups for early feedback
4. Prepare marketing materials for feature announcements
5. Schedule regular progress reviews and stakeholder updates

Conclusion

This roadmap represents a significant step forward for our platform. The features we're developing will not only meet current user needs but position us for future growth and market leadership.

I'm excited about what we're building and confident in our team's ability to deliver these improvements on schedule. The combination of new features, performance improvements, and enhanced user experience will make our platform more valuable than ever.

Please review this roadmap and let me know if you have any questions or concerns. I'll be scheduling individual meetings with team leads to discuss implementation details and resource allocation.

Looking forward to an exciting Q4!

Best regards,
Sarah Chen
VP of Product Development

P.S. Don't forget about our all-hands meeting next Friday where we'll dive deeper into the technical implementation details. Coffee and pastries will be provided!

---

This email contains confidential information. If you received this email in error, please delete it immediately and notify the sender.`,
    date: new Date().setHours(9, 30, 0, 0),
    read: false,
    starred: true,
    labels: ["important", "product", "roadmap"]
  }
]

export default emails
