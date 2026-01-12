// "use client";

// import { Loader2 } from "lucide-react";
// import dynamic from "next/dynamic";

// // Dynamically import the heavy trading interface component
// // This reduces the initial bundle size and speeds up the first load
// const TradingInterface = dynamic(
//   () => import("@/components/TradingInterface"),
//   {
//     loading: () => (
//       <div className="flex h-screen w-full items-center justify-center bg-[#1a1a1a] text-white">
//         <div className="flex flex-col items-center gap-4">
//           <Loader2 className="h-10 w-10 animate-spin text-[#ff6b35]" />
//           <p className="animate-pulse text-sm text-gray-400">
//             Loading Trading Platform...
//           </p>
//         </div>
//       </div>
//     ),
//     ssr: false, // Trading charts often rely on window/canvas which isn't available on server
//   }
// );

// export default function TradePage() {
//   return (
//     <div className="min-h-screen bg-[#1a1a1a]">
//       <TradingInterface />
//     </div>
//   );
// }
