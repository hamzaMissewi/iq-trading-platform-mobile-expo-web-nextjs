"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const traders = [
  { name: "José García", country: "Brazil", profit: "+$742", color: "#10b981" },
  {
    name: "Somchai Manigmee",
    country: "Thailand",
    profit: "+$500",
    color: "#10b981",
  },
  { name: "Muhammad Ali", country: "UAE", profit: "+$458", color: "#10b981" },
];

export default function TradingChart() {
  const [chartData, setChartData] = useState([]);
  const [activeTraders, setActiveTraders] = useState([]);

  useEffect(() => {
    // Generate initial chart data
    const data = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        time: i,
        value: 5000 + Math.sin(i / 5) * 1000 + Math.random() * 500,
      });
    }
    setChartData(data);

    // Show traders at specific points
    setTimeout(() => {
      setActiveTraders([0]); // José García
    }, 500);
    setTimeout(() => {
      setActiveTraders([0, 1]); // + Somchai
    }, 1500);
    setTimeout(() => {
      setActiveTraders([0, 1, 2]); // + Muhammad Ali
    }, 2500);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] rounded-2xl p-4 sm:p-8 border border-[#3a3a3a] shadow-2xl">
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center text-xs font-bold">
            ₿
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block w-16 h-8 bg-[#2a2a2a] rounded"></div>
          <div className="hidden sm:block w-16 h-8 bg-[#2a2a2a] rounded"></div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-[300px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="time" hide />
            <YAxis hide domain={["dataMin - 500", "dataMax + 500"]} />
            <Tooltip
              contentStyle={{
                background: "#1f1f1f",
                border: "1px solid #3a3a3a",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="url(#gradient)"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff6b35" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#ff6b35" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>

        {/* Trader Avatars */}
        {activeTraders.map((traderIndex, i) => {
          const trader = traders[traderIndex];
          const positions = [
            { left: "20%", top: "60%" },
            { left: "50%", top: "30%" },
            { left: "75%", top: "40%" },
          ];

          return (
            <div
              key={traderIndex}
              className="absolute"
              style={{
                left: positions[traderIndex].left,
                top: positions[traderIndex].top,
                animation: "fadeIn 0.5s ease-in",
              }}
            >
              <div className="relative">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] flex items-center justify-center text-white font-bold border-2 border-white shadow-lg">
                  {trader.name.charAt(0)}
                </div>
                {/* Info Card */}
                <div className="absolute left-14 top-0 bg-[#1f1f1f] border border-[#3a3a3a] rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
                  <div className="font-semibold text-sm">{trader.name}</div>
                  <div className="text-xs text-gray-400">{trader.country}</div>
                  <div className="text-sm font-bold text-green-500 mt-1">
                    {trader.profit}
                  </div>
                </div>
                {/* Connection Line */}
                <div className="absolute left-6 top-6 w-8 h-0.5 bg-white/30"></div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
