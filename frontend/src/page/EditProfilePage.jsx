import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { ProfilePictureUpload } from "../components/edit-profile/ProfilePictureUpload"
import { FormField } from "../components/edit-profile/FormField"
import { User, Mail, Info, LinkIcon, Github, Linkedin, TwitterIcon } from "lucide-react"

export default function EditProfilePage() {
  const [profileData, setProfileData] = useState({
  name: "Code Ninja",
  email: "codeninja@example.com",
  avatarUrl: "/placeholder.svg?width=128&height=128&text=CN",
  dob: "", // YYYY-MM-DD format
  bio: "Passionate full-stack developer, open-source enthusiast, and lifelong learner. Always exploring new technologies and building cool stuff.",
  website: "https://codeninja.dev",
  github: "https://github.com/codeninja",
  linkedin: "https://linkedin.com/in/codeninja",
  twitter: "https://twitter.com/codeninja_dev",
})
  const [avatarPreview, setAvatarPreview] = useState("/placeholder.svg?width=128&height=128&text=CN")

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAvatarChange = (newAvatarDataUrl) => {
    // In a real app, you'd handle file upload here.
    // For now, we just update the preview and a mock data URL in state.
    setAvatarPreview(newAvatarDataUrl)
    setProfileData((prev) => ({ ...prev, avatarUrl: newAvatarDataUrl }))
    console.log("New avatar data URL (mock):", newAvatarDataUrl.substring(0, 50) + "...")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, send profileData to the backend
    console.log("Profile data saved:", profileData)
    alert("Profile saved successfully! (Check console for data)")
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-3xl">
        <Card className="bg-neutral-850 border-neutral-700">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-neutral-100">Edit Profile</CardTitle>
            <CardDescription className="text-neutral-400">
              Manage your account details and public profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <ProfilePictureUpload currentAvatarUrl={avatarPreview} onAvatarChange={handleAvatarChange} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  id="name"
                  label="Full Name"
                  value={profileData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  icon={User}
                />
                <FormField
                  id="email"
                  label="Email Address"
                  type="email"
                  value={profileData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  icon={Mail}
                />
              </div>

              <FormField id="dob" label="Date of Birth" type="date" value={profileData.dob} onChange={handleChange} />

              <FormField
                id="bio"
                label="Bio"
                type="textarea"
                value={profileData.bio}
                onChange={handleChange}
                placeholder="Tell us a little about yourself..."
                icon={Info}
                className="bg-neutral-750 border-neutral-600 focus:border-blue-500 text-neutral-200 min-h-[120px] pl-9 pt-2" // Custom styling for textarea with icon
              />

              <div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-300 border-b border-neutral-700 pb-2">
                  Social Links
                </h3>
                <div className="space-y-4 mt-4">
                  <FormField
                    id="website"
                    label="Website URL"
                    value={profileData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    icon={LinkIcon}
                  />
                  <FormField
                    id="github"
                    label="GitHub Profile URL"
                    value={profileData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/yourusername"
                    icon={Github}
                  />
                  <FormField
                    id="linkedin"
                    label="LinkedIn Profile URL"
                    value={profileData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourusername"
                    icon={Linkedin}
                  />
                  <FormField
                    id="twitter"
                    label="Twitter Profile URL"
                    value={profileData.twitter}
                    onChange={handleChange}
                    placeholder="https://twitter.com/yourusername"
                    icon={TwitterIcon}
                  />
                </div>
              </div>

              <CardFooter className="px-0 pt-6 flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  className="border-neutral-600 hover:bg-neutral-700 text-neutral-300"
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Save Changes
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
