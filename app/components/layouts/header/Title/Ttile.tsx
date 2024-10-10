import React from "react";

interface HeadProps {
  children: React.ReactNode;
}
export default function Head({ children }: HeadProps) {
  return <div className="header_title">{children}</div>;
}
