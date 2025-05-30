import type { SVGProps } from "react"

export function MapPointSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path
        fill="#EC442C"
        fillRule="evenodd"
        d="M11.291 21.706L12 21zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007l-.017-.017l-.062-.063a48 48 0 0 1-1.04-1.106a50 50 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8s8 3.461 8 8c0 1.248-.535 2.612-1.213 3.87c-.693 1.286-1.604 2.585-2.497 3.735a50 50 0 0 1-3.496 4.014l-.062.063l-.017.017l-.006.006zm0-8a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
