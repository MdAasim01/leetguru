import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { ProfilePictureUpload } from "../components/edit-profile/ProfilePictureUpload";
import { FormField } from "../components/edit-profile/FormField";
import { User, Mail, Info, LinkIcon, Github, Linkedin, TwitterIcon } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";

export default function EditProfilePage() {
  const { authUser, updateProfile } = useAuthStore();
  const [profileData, setProfileData] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null); // Track file

  useEffect(() => {
    if (authUser) {
      setProfileData({
        name: authUser?.name || "",
        email: authUser?.email || "",
        dob: authUser?.dob?.split("T")[0] || "",
        bio: authUser?.bio || "",
        website: authUser?.website || "",
        github: authUser?.github || "",
        linkedin: authUser?.linkedin || "",
        twitter: authUser?.twitter || "",
      });
      setAvatarPreview(authUser?.image || "/placeholder.svg");
    }
  }, [authUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (file, previewUrl) => {
    setAvatarPreview(previewUrl);
    setAvatarFile(file); // Store actual File object
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append updated fields only
    for (const key in profileData) {
      if (profileData[key] !== authUser[key]) {
        formData.append(key, profileData[key]);
      }
    }

    // Append avatar if changed
    if (avatarFile instanceof File) {
      formData.append("avatar", avatarFile);
    }

    try {
      await updateProfile(formData, avatarFile);

      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile.");
    }
  };

  if (!profileData) {
    return (
      <div className="min-h-screen bg-neutral-900 text-neutral-200 flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen  text-neutral-200 p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-3xl">
        <Card className="bg-gray-900/80 border-neutral-700">
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
                className="bg-neutral-750 border-neutral-600 focus:border-blue-500 text-neutral-200 min-h-[120px] pl-9 pt-2"
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
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-slate-900">
                  Save Changes
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
