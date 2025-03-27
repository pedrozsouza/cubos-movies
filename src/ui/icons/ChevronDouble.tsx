import React from "react";

export default function ChevronDoubleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 18L12 12L6 18" stroke="currentColor" strokeWidth="2" />
      <path d="M18 12L12 6L6 12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

