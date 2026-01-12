"use client";

import { useState } from "react";
import TradingInterface from "@/components/TradingInterface";

export default function TradePage() {
  const [balance, setBalance] = useState(10000);
  const [asset, setAsset] = useState("BTC/USD");

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <TradingInterface
        balance={balance}
        setBalance={setBalance}
        asset={asset}
        setAsset={setAsset}
      />
    </div>
  );
}
