import { Loader2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmailHeader({
  unreadCount,
  totalCount,
  onRefresh,
  isRefreshing
}) {
  return (
    <div className="bg-gray-50 p-4 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-medium text-lg">Inbox</h1>
          <div className="text-sm text-gray-500">
            {unreadCount > 0 ? (
              <span>{unreadCount} unread of {totalCount} total</span>
            ) : (
              <span>No unread messages</span>
            )}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onRefresh}
            disabled={isRefreshing}
          >
            {isRefreshing ? (
              <>
                <Loader2Icon className="animate-spin" />
                Refreshing...
              </>
            ) : (
              <span>Refresh</span>
            )}
          </Button>
          <Button
            size="sm"
          >
            New Email
          </Button>
        </div>
      </div>
    </div>
  )
}
