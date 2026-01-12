"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";

const assets = [
  { symbol: "BTC/USD", name: "Bitcoin" },
  { symbol: "ETH/USD", name: "Ethereum" },
  { symbol: "EUR/USD", name: "Euro/Dollar" },
  { symbol: "GBP/USD", name: "Pound/Dollar" },
  { symbol: "AAPL", name: "Apple" },
  { symbol: "TSLA", name: "Tesla" },
];

export default function TradingInterface({
  balance,
  setBalance,
  asset,
  setAsset,
}) {
  const [chartData, setChartData] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(42156.78);
  const [priceChange, setPriceChange] = useState(0);
  const [investment, setInvestment] = useState(100);
  const [timeframe, setTimeframe] = useState("1m");
  const [direction, setDirection] = useState(null);
  const [activeTrades, setActiveTrades] = useState([]);

  // Generate chart data
  useEffect(() => {
    const data = [];
    let price = 42000 + Math.random() * 1000;
    for (let i = 0; i < 100; i++) {
      price += (Math.random() - 0.5) * 200;
      data.push({
        time: i,
        value: price,
      });
    }
    setChartData(data);
    setCurrentPrice(price);
  }, [asset]);

  // Real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => {
        const newData = [...prev.slice(1)];
        const lastPrice = prev[prev.length - 1].value;
        const newPrice = lastPrice + (Math.random() - 0.5) * 100;
        newData.push({
          time: prev[prev.length - 1].time + 1,
          value: newPrice,
        });
        setCurrentPrice(newPrice);
        setPriceChange(((newPrice - lastPrice) / lastPrice) * 100);
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const placeTrade = (tradeDirection) => {
    const newTrade = {
      id: Date.now(),
      asset,
      direction: tradeDirection,
      investment,
      entryPrice: currentPrice,
      entryTime: new Date(),
      timeframe,
    };

    setActiveTrades((prev) => [...prev, newTrade]);
    setBalance((prev) => prev - investment);

    // Auto-close trade after timeframe
    const duration =
      timeframe === "1m" ? 60000 : timeframe === "5m" ? 300000 : 900000;
    setTimeout(() => {
      closeTrade(newTrade.id);
    }, duration);
  };

  const closeTrade = (tradeId) => {
    setActiveTrades((prev) => {
      const trade = prev.find((t) => t.id === tradeId);
      if (trade) {
        const priceMovement = currentPrice - trade.entryPrice;
        const correct =
          (trade.direction === "up" && priceMovement > 0) ||
          (trade.direction === "down" && priceMovement < 0);
        const payout = correct ? trade.investment * 1.85 : 0;
        setBalance((b) => b + payout);
      }
      return prev.filter((t) => t.id !== tradeId);
    });
  };

  return (
    <div className="p-4 space-y-4">
      {/* Asset Selector */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {assets.map((a) => (
          <button
            key={a.symbol}
            onClick={() => setAsset(a.symbol)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
              asset === a.symbol
                ? "bg-[#ff6b35] text-white"
                : "bg-[#2a2a2a] text-gray-400 hover:bg-[#333333]"
            }`}
          >
            {a.symbol}
          </button>
        ))}
      </div>

      {/* Price Display */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">{asset}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-3xl font-bold">
                ${currentPrice.toFixed(2)}
              </span>
              <span
                className={`flex items-center gap-1 ${priceChange >= 0 ? "text-green-500" : "text-red-500"}`}
              >
                {priceChange >= 0 ? (
                  <TrendingUp size={20} />
                ) : (
                  <TrendingDown size={20} />
                )}
                {priceChange >= 0 ? "+" : ""}
                {priceChange.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-80 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="time" hide />
              <YAxis hide domain={["dataMin - 100", "dataMax + 100"]} />
              <Tooltip
                contentStyle={{
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ff6b35"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trading Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Investment */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
          <h3 className="text-lg font-bold mb-4">Investment Amount</h3>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full bg-[#2a2a2a] text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#ff6b35]"
            min="1"
            max={balance}
          />
          <div className="flex gap-2 mt-4">
            {[50, 100, 250, 500].map((amount) => (
              <button
                key={amount}
                onClick={() => setInvestment(amount)}
                className="flex-1 bg-[#2a2a2a] hover:bg-[#333333] px-3 py-2 rounded-lg text-sm transition"
              >
                ${amount}
              </button>
            ))}
          </div>

          {/* Timeframe */}
          <h3 className="text-lg font-bold mb-4 mt-6">Timeframe</h3>
          <div className="flex gap-2">
            {["1m", "5m", "15m"].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`flex-1 px-4 py-2 rounded-lg transition ${
                  timeframe === tf
                    ? "bg-[#ff6b35] text-white"
                    : "bg-[#2a2a2a] text-gray-400 hover:bg-[#333333]"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          {/* Trade Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              onClick={() => placeTrade("up")}
              disabled={investment > balance}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-6 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2"
            >
              <TrendingUp size={24} />
              UP
            </button>
            <button
              onClick={() => placeTrade("down")}
              disabled={investment > balance}
              className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-6 py-4 rounded-lg font-bold text-lg transition flex items-center justify-center gap-2"
            >
              <TrendingDown size={24} />
              DOWN
            </button>
          </div>
        </div>

        {/* Active Trades */}
        <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
          <h3 className="text-lg font-bold mb-4">Active Trades</h3>
          <div className="space-y-3">
            {activeTrades.length === 0 ? (
              <p className="text-gray-400 text-center py-8">No active trades</p>
            ) : (
              activeTrades.map((trade) => (
                <div key={trade.id} className="bg-[#2a2a2a] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">{trade.asset}</span>
                    <span
                      className={
                        trade.direction === "up"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {trade.direction === "up" ? "↑" : "↓"}{" "}
                      {trade.direction.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 space-y-1">
                    <div className="flex justify-between">
                      <span>Investment:</span>
                      <span>${trade.investment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Entry:</span>
                      <span>${trade.entryPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Current:</span>
                      <span>${currentPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
