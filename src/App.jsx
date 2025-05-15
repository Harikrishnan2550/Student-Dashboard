import React from "react";
import Header from "./components/Header";
import BarCharts from "./components/BarCharts";
import LineCharts from "./components/LineCharts";
import PieCharts from "./components/PieCharts";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4 grid gap-8 md:grid-cols-2">
        <PieCharts />
        <LineCharts />
        <BarCharts />
      </main>
    </div>
  );
}

export default App;
