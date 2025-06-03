import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StatsSection } from '../components/profile/StatsSection';
import { StreakCalendar } from '../components/profile/StreakCalendar';
import { RankingSection } from '../components/profile/RankingSection';
import { ProblemList } from '../components/profile/ProblemList';
import { userProfileData } from '../data/profile-mock-data'; // Import mock data
import { User, CalendarDays, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function ProfilePage() {
  const { username, avatarUrl, joinDate, stats, streak, ranking, solvedProblems, submissions } = userProfileData;

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 space-y-8">
      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-primary">
            <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={username} />
            <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">{username}</h1>
            <p className="text-muted-foreground flex items-center justify-center md:justify-start">
              <CalendarDays className="mr-2 h-4 w-4" />
              Joined on {new Date(joinDate).toLocaleDateString()}
            </p>
            {/* Add any other badges or short info here if needed */}
          </div>
          <Button variant="outline">
            <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Stats and Ranking) */}
        <div className="lg:col-span-1 space-y-6">
          <StatsSection stats={stats} />
          <RankingSection ranking={ranking} />
        </div>

        {/* Right Column (Streak and Lists) */}
        <div className="lg:col-span-2 space-y-6">
          <StreakCalendar streakData={streak} />
          <ProblemList title="Solved Problems" problems={solvedProblems.slice(0, 5)} type="solved" /> {/* Show first 5 for brevity */}
          <ProblemList title="Recent Submissions" problems={submissions.slice(0, 5)} type="submissions" /> {/* Show first 5 */}
        </div>
      </div>
    </div>
  );
}