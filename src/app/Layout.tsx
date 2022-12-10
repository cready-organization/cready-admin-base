import React, { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
