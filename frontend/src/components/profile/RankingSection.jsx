import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, Award } from 'lucide-react';

export function RankingSection({ ranking }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Award className="mr-2 h-5 w-5 text-yellow-500" />
          Ranking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-around text-center">
          <div>
            <p className="text-3xl font-bold text-primary">#{ranking.currentUserRank}</p>
            <p className="text-sm text-muted-foreground">Your Rank</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Top {ranking.percentile.toFixed(1)}%</p>
            <p className="text-sm text-muted-foreground">Percentile</p>
          </div>
          <div>
            <p className="text-lg">{ranking.totalUsers.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Total Users</p>
          </div>
        </div>
        {/* Optionally, add a small leaderboard snippet here if desired */}
      </CardContent>
    </Card>
  );
}