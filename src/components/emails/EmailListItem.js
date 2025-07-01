import { memo } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { formatDate } from "@/lib/dates"

const EmailListItem = memo(function EmailListItem({
  email,
  isSelected,
  onSelectEmail,
  onToggleStar
}) {
  // Remove the console.log for production
  console.log(`Rendering email: ${email.id}`)

  const handleToggleStar = (e) => {
    e.stopPropagation()
    onToggleStar(email.id)
  }

  return (
    <div
      className={`
        p-4 hover:bg-gray-50 cursor-pointer
        ${email.read ? "bg-white" : "bg-blue-50"}
        ${isSelected && "border-l-4 border-primary"}
      `}
      onClick={() => onSelectEmail(email.id)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-grow min-w-0">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className={`
                h-4 w-4 p-0 mr-1 hover:text-yellow-400 hover:bg-transparent
                ${email.starred ? "text-yellow-400" : "text-gray-400"}
              `}
              onClick={handleToggleStar}
            >
              <Star className={`${email.starred && "fill-current"}`} />
            </Button>
            <span className={`font-medium ${!email.read && "font-bold"}`}>
              {email.from}
            </span>
          </div>

          <div className={`${!email.read && "font-bold"}`}>
            {email.subject}
          </div>

          <div className="text-sm text-gray-600 truncate mt-1">
            {email.body}
          </div>

          {email.labels?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {email.labels.map((label) => (
                <Badge
                  key={label}
                  variant="secondary"
                >
                  {label}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="text-sm text-gray-500 whitespace-nowrap mr-3">
          {formatDate(email.date)}
        </div>
      </div>
    </div>
  )
})

EmailListItem.displayName = 'EmailListItem'

export default EmailListItem
