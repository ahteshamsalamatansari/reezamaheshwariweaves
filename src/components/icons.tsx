import type { SVGProps } from "react";

export function WeaveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 11V4h7" />
      <path d="M11 4h2" />
      <path d="M13 4h7v7" />
      <path d="M20 11v2" />
      <path d="M20 13v7h-7" />
      <path d="M13 20h-2" />
      <path d="M11 20H4v-7" />
      <path d="M4 13v-2" />
      <path d="M13 11h-2" />
      <path d="M11 13H4" />
      <path d="M20 13h-7" />
      <path d="M13 20v-7" />
      <path d="M11 4v7" />
    </svg>
  );
}
