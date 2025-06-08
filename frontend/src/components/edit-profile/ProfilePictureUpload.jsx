import { useState, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"
import toast from "react-hot-toast"

export function ProfilePictureUpload({ currentAvatarUrl, onAvatarChange }) {
  const [previewUrl, setPreviewUrl] = useState(currentAvatarUrl)
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const maxSizeInMB = 10;
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

      if (file.size > maxSizeInBytes) {
        toast.error(`File size should not exceed ${maxSizeInMB} MB.`);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        onAvatarChange(file, reader.result); // ✅ send file and preview
      };
      reader.readAsDataURL(file);
    }
  };


  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex flex-col items-center space-y-3">
      <Avatar className="h-32 w-32 border-2 border-neutral-600">
        <AvatarImage src={previewUrl || "/placeholder.svg"} alt="User Avatar" />
        <AvatarFallback className="text-4xl bg-neutral-700 text-neutral-400">CN</AvatarFallback>
      </Avatar>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/gif"
        className="hidden"
      />
      <Button
        variant="outline"
        size="sm"
        onClick={triggerFileInput}
        className="border-neutral-600 hover:bg-neutral-700 text-neutral-300"
      >
        <Camera className="mr-2 h-4 w-4" />
        Change Picture
      </Button>
    </div>
  )
}
