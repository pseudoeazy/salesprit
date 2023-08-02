import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: Props) {
  return (
    <div className="main-page-layout font-primary overflow-x-hidden ">
      {children}
    </div>
  );
}
