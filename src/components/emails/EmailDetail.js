// src/components/emails/EmailDetail.js

import { ArrowLeft, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatDate } from '@/lib/dates'
import EmailAvatar from './EmailAvatar'

export default function EmailDetail({ email, onBack }) {
  if (!email) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <Mail className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium mb-2">No email selected</h3>
          <p>Select an email from the list to view its contents</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Email Header Section - Fixed */}
      <div className="flex-shrink-0 border-b border-gray-200 bg-gray-50 p-4">
        {/* Mobile Back Button */}
        {onBack && (
          <div className="mb-3 md:hidden">
            <Button
              variant="ghost"
              onClick={onBack}
            >
              <ArrowLeft />
              Back to inbox
            </Button>
          </div>
        )}

        {/* Subject and metadata */}
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-900 leading-tight pr-4">
            {email.subject}
          </h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500 whitespace-nowrap">
            <span>{formatDate(email.date)}</span>
            {email.starred && (
              <Star
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                title="Starred"
              />
            )}
          </div>
        </div>

        {/* Sender info as media object */}
        <div className="flex items-center space-x-3 mb-3">
          <EmailAvatar
            name={email.from}
            avatar={email.avatar}
            size="lg"
          />
          <div className="flex-1 min-w-0">
            {/* Sender name as heading */}
            <div className="font-medium text-gray-900 text-base mb-1">
              {email.from}
            </div>

            {/* Labels underneath */}
            {email.labels?.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {email.labels.map((label) => (
                  <Badge
                    key={label}
                    variant="secondary"
                    className="text-xs"
                  >
                    {label}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Email Body Section - Scrollable */}
      <ScrollArea className="min-h-0 h-full p-4 whitespace-pre-wrap text-gray-900 leading-relaxed">
        {email.body}
      </ScrollArea>

      {/* Action Buttons - Fixed at Bottom */}
      <div className="flex-shrink-0 border-t border-gray-200 bg-gray-50 p-4">
        <div className="flex flex-wrap gap-3">
          <Button variant="outline">
            Reply
          </Button>
          <Button variant="outline">
            Forward
          </Button>
          <Button variant="destructive">
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
