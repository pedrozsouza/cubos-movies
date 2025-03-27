import React from "react";

export default function ChevronIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
