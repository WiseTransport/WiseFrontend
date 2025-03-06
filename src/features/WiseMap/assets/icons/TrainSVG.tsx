import { HeroUISVGProps } from "@/types/svgProps.ts"

export default function TrainSVG({ fill = "none", size, height, width }: HeroUISVGProps) {
  return (
    <svg
      fill={fill}
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.17,1.5h7.65a3.83,3.83,0,0,1,3.83,3.83v9.57a1.91,1.91,0,0,1-1.91,1.91H6.26a1.91,1.91,0,0,1-1.91-1.91V5.33A3.83,3.83,0,0,1,8.17,1.5Z"
        stroke="black"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <line
        stroke="black"
        strokeLinecap="round"
        strokeWidth="1.5"
        x1="8.17"
        x2="5.3"
        y1="16.8"
        y2="23.5"
      />
      <line
        stroke="black"
        strokeLinecap="round"
        strokeWidth="1.5"
        x1="15.83"
        x2="18.7"
        y1="16.8"
        y2="23.5"
      />
      <line
        stroke="black"
        strokeLinecap="round"
        strokeWidth="1.5"
        x1="6.26"
        x2="17.74"
        y1="20.63"
        y2="20.63"
      />
      <line
        stroke="black"
        strokeLinecap="round"
        strokeWidth="1.5"
        x1="19.65"
        x2="4.35"
        y1="11.07"
        y2="11.07"
      />
      <line
        stroke="black"
        strokeLinecap="round"
        strokeWidth="1.5"
        x1="7.22"
        x2="9.13"
        y1="13.93"
        y2="13.93"
      />
      <line
        stroke="black"
        strokeLinecap="round"
        strokeWidth="1.5"
        x1="14.87"
        x2="16.78"
        y1="13.93"
        y2="13.93"
      />
    </svg>
  )
}
