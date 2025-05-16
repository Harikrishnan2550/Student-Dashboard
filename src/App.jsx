import React from "react";
import Header from "./components/Header";
import BarCharts from "./components/BarCharts";
import LineCharts from "./components/LineCharts";
import PieCharts from "./components/PieCharts";
import StatsCards from "./components/StatsCards";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <StatsCards />
        <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          <div className="md:col-span-1 lg:col-span-2">
            <LineCharts />
          </div>
          <PieCharts />
          <div className="md:col-span-2 lg:col-span-3">
            <BarCharts />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;