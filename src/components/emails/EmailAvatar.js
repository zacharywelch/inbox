import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Simple function to get initials from name or email
function getInitials(name) {
  if (!name) return '?'

  // If it's an email, take the part before @
  if (name.includes('@')) {
    name = name.split('@')[0]
  }

  // Take first letters of first and last word
  const words = name.split(' ')
  if (words.length >= 2) {
    return words[0][0].toUpperCase() + words[words.length - 1][0].toUpperCase()
  }

  // Just take first two letters if one word
  return name.substring(0, 2).toUpperCase()
}

export default function EmailAvatar({
  name,
  avatar = null,
  size = "default",
  className = ""
}) {
  const initials = getInitials(name)

  // Size classes for different avatar sizes
  const sizeClasses = {
    sm: "h-6 w-6 text-xs",
    default: "h-8 w-8 text-sm",
    lg: "h-10 w-10 text-base"
  }

  console.log(name, avatar, initials)

  return (
    <Avatar className={`${sizeClasses[size]} ${className}`}>
      <AvatarImage
        src={avatar}
        alt={`Avatar for ${name}`}
      />
      <AvatarFallback className="bg-blue-500 text-white font-medium">
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}
