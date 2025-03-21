import { HeroUISVGProps } from "@/types/svgProps.ts"

export default function ClockSVG({ fill = "none", size, height, width }: HeroUISVGProps) {
  return (
    <svg
      fill={fill}
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 13L12 13M12 13L9 13M12 13L12 10M12 13L12 16"
        stroke="#EC442C"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M3.5 4.5L7.50002 2"
        stroke="#EC442C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M20.5 4.5L16.5 2"
        stroke="#EC442C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M7.5 5.20404C8.82378 4.43827 10.3607 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 11.3607 3.43827 9.82378 4.20404 8.5"
        stroke="#EC442C"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}
