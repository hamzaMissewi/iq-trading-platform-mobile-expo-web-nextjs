import "./global.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "IQ Options",
  description: "Advanced options trading platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/src/__create/favicon.png" />
        <script
          src="https://kit.fontawesome.com/2c15cc0cc7.js"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body>
        <SessionProvider>
          {children}
          <Toaster position="bottom-right" />
        </SessionProvider>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" href="/favicon.ico" />
//         <script
//           src="https://kit.fontawesome.com/2c15cc0cc7.js"
//           crossOrigin="anonymous"
//           async
//         />
//       </head>
//       <body>
//         {children}
//         <Toaster position="bottom-right" />
//       </body>
//     </html>
//   );
// }
