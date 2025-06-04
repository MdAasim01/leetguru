import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { StatsSection } from '../components/profile/StatsSection';
import { StreakCalendar } from '../components/profile/StreakCalendar';
import { RankingSection } from '../components/profile/RankingSection';
import { ProblemList } from '../components/profile/ProblemList';
import { User, CalendarDays, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { axiosInstance } from '@/lib/axios';

export default function ProfilePage() {
  const [username, setUsername] = useState("Loading...");
  const [avatarUrl, setAvatarUrl] = useState("/placeholder.svg");
  const [joinDate, setJoinDate] = useState("2023-01-01");
  const [stats, setStats] = useState(null);
  const [streak, setStreak] = useState(null);
  const [ranking, setRanking] = useState(null);
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Ideally all these calls should be in a try/catch or useSWR/tanstack-query
    const fetchData = async () => {
      try {
        const [
          activityRes,
          statsRes,
          difficultyRes,
          languageRes,
          solvedRes,
          rankRes,
        ] = await Promise.all([
          axiosInstance.get('/user-stats/activity-summary'),
          axiosInstance.get('/user-stats/overview'),
          axiosInstance.get('/user-stats/solved-difficulty'),
          axiosInstance.get('/user-stats/solved-language'),
          axiosInstance.get('/user-stats/solved-details'),
          axiosInstance.get('/user-stats/rank'),
        ]);

        const activity = activityRes.data.data;
        const statsData = statsRes.data.data;
        const difficultyData = difficultyRes.data.data;
        const languageData = languageRes.data.data;
        const solved = solvedRes.data.data;
        const rank = rankRes.data.data;

        setUsername("CodeNinja27"); // Ideally from auth/user endpoint
        setJoinDate("2023-01-15");
        setAvatarUrl("/placeholder.svg");

        // === STATS ===
        const colorMap = {
          JavaScript: "bg-yellow-400",
          Python: "bg-blue-400",
          Java: "bg-red-400",
          "C++": "bg-green-400",
        };

        const languageStats = Object.entries(languageData).map(([language, count]) => ({
          language,
          count,
          color: colorMap[language] || "bg-gray-400",
        }));

        setStats({
          problemsSolvedByLanguage: languageStats,
          problemsSolvedByDifficulty: {
            easy: difficultyData.EASY || 0,
            medium: difficultyData.MEDIUM || 0,
            hard: difficultyData.HARD || 0,
          },
          totalSolved: Object.values(difficultyData).reduce((acc, val) => acc + val, 0),
          totalSubmissions: parseInt(statsData.totalSubmissions),
          acceptanceRate: parseFloat(statsData.acceptanceRate),
        });

        // === STREAK ===
        const contributions = {};
        activity.activityGraph.forEach(({ date, count }) => {
          contributions[date] = count;
        });

        setStreak({
          contributions,
          currentStreak: activity.currentStreak,
          longestStreak: activity.longestStreak,
          totalActiveDays: activity.totalActiveDays,
        });

        // === RANKING ===
        setRanking({
          currentUserRank: rank.rank,
          totalUsers: rank.totalUsers,
          percentile: parseFloat(rank.percentile),
        });

        // === SOLVED PROBLEMS (mock style) ===
        setSolvedProblems(
          solved.map((s, i) => ({
            id: `sp-${i}`,
            title: s.title,
            difficulty: "Unknown", // Add if you store it; otherwise remove
            tags: [],
            solvedDate: new Date(s.date).toISOString().split("T")[0],
          }))
        );

        // === SUBMISSIONS (mock style) ===
        setSubmissions(
          solved.map((s, i) => ({
            id: `sub-${i}`,
            problemTitle: s.title,
            language: s.language,
            status: s.status,
            runtime: s.runtime || "-",
            memory: s.memory || "-",
            submittedDate: s.date,
          }))
        );
      } catch (err) {
        console.error("Profile data error", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 space-y-8">
      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-primary">
            <AvatarImage src={avatarUrl} alt={username} />
            <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">{username}</h1>
            <p className="text-muted-foreground flex items-center justify-center md:justify-start">
              <CalendarDays className="mr-2 h-4 w-4" />
              Joined on {new Date(joinDate).toLocaleDateString()}
            </p>
          </div>
          <Button variant="outline">
            <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          {stats && <StatsSection stats={stats} />}
          {ranking && <RankingSection ranking={ranking} />}
        </div>

        <div className="lg:col-span-2 space-y-6">
          {streak && <StreakCalendar streakData={streak} />}
          <ProblemList title="Solved Problems" problems={solvedProblems.slice(0, 5)} type="solved" />
          <ProblemList title="Recent Submissions" problems={submissions.slice(0, 5)} type="submissions" />
        </div>
      </div>
    </div>
  );
}
