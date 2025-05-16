import React from "react";
import { averageScores, studentProgress, gradeDistribution } from "../data/sampleData";

function StatsCards() {
  const totalStudents = gradeDistribution.reduce((acc, grade) => acc + grade.value, 0);
  const avgScore = averageScores.reduce((acc, subject) => acc + subject.average, 0) / averageScores.length;
  const progress = ((studentProgress[studentProgress.length - 1].score - studentProgress[0].score) / studentProgress[0].score * 100);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
        <h3 className="text-gray-500 text-sm font-medium">Total Students</h3>
        <p className="text-2xl font-bold">{totalStudents}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
        <h3 className="text-gray-500 text-sm font-medium">Average Score</h3>
        <p className="text-2xl font-bold">{avgScore.toFixed(1)}%</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-500">
        <h3 className="text-gray-500 text-sm font-medium">Top Subject</h3>
        <p className="text-2xl font-bold">Malayalam (93%)</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
        <h3 className="text-gray-500 text-sm font-medium">Progress</h3>
        <p className="text-2xl font-bold text-green-600">+{progress.toFixed(1)}%</p>
      </div>
    </div>
  );
}

export default StatsCards;