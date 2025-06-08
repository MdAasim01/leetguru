import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StatsSection } from "../components/profile/StatsSection";
import { StreakCalendar } from "../components/profile/StreakCalendar";
import { RankingSection } from "../components/profile/RankingSection";
import { ProblemList } from "../components/profile/ProblemList";
import { CalendarDays, Edit3, Copy, Globe, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const { authUser } = useAuthStore();
  const [stats, setStats] = useState(null);
  const [streak, setStreak] = useState(null);
  const [ranking, setRanking] = useState(null);
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [submissions, setSubmissions] = useState([]);

  const username = authUser?.name || "User";
  const avatarUrl = authUser?.image || "/placeholder.svg";
  const joinDate = authUser?.createdAt || "2023-01-01";

  useEffect(() => {
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
          axiosInstance.get("/user-stats/activity-summary"),
          axiosInstance.get("/user-stats/overview"),
          axiosInstance.get("/user-stats/solved-difficulty"),
          axiosInstance.get("/user-stats/solved-language"),
          axiosInstance.get("/user-stats/solved-details"),
          axiosInstance.get("/user-stats/rank"),
        ]);

        const activity = activityRes.data.data;
        const statsData = statsRes.data.data;
        const difficultyData = difficultyRes.data.data;
        const languageData = languageRes.data.data;
        const solved = solvedRes.data.data;
        const rank = rankRes.data.data;

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

        setRanking({
          currentUserRank: rank.rank,
          totalUsers: rank.totalUsers,
          percentile: parseFloat(rank.percentile),
        });

        setSolvedProblems(
          solved.map((s, i) => ({
            id: `sp-${i}`,
            title: s.title,
            difficulty: s.difficulty || "Unknown",
            tags: [],
            solvedDate: new Date(s.date).toISOString().split("T")[0],
          }))
        );

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


  const handleCopyUserId = () => {
    navigator.clipboard.writeText(authUser.id);
    toast.success("User ID copied to clipboard");
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 space-y-8">
      <Card className="bg-gray-900/80">
        <CardContent className="pt-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-primary">
            <AvatarImage src={avatarUrl} alt={username} />
            <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{username}</h1>
            <div className="inline-flex border-1 border-gray-600 rounded p-2 my-3 bg-gray-800 text-sm text-neutral-400 items-center justify-center md:justify-start mt-1">
              {authUser.id}
              <button
                onClick={handleCopyUserId}
                className="ml-2 hover:text-white text-neutral-500"
                title="Copy user ID"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            <p className="text-muted-foreground flex items-center justify-center md:justify-start">
              <CalendarDays className="mr-2 h-4 w-4" />
              Joined on {new Date(joinDate).toLocaleDateString()}
            </p>
            <div className="flex space-x-4 mt-6">
              <a href={authUser.website} target="_blank" className="text-gray-400 hover:text-white">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Globe className="h-5 w-5" />
                </div>
              </a>
              <a href={authUser.github} target="_blank" className="text-gray-400 hover:text-white">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Github className="h-5 w-5" />
                </div>
              </a>
              <a href={authUser.twitter} target="_blank" className="text-gray-400 hover:text-white">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Twitter className="h-5 w-5" />
                </div>
              </a>
              <a href={authUser.linkedin} target="_blank" className="text-gray-400 hover:text-white">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div>
          <div className="self-start">
            <Button variant="outline" className="px-0 py-0">
              <Link to="/edit-profile" className="flex items-center px-4 py-2">
                <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

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
