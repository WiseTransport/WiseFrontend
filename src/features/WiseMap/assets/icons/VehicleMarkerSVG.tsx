import { HeroUISVGProps } from "@/types"
import { CSSProperties } from "react"

export default function VehicleMarkerSVG({
  style,
  fill = "none",
  size,
  height,
  width,
  className,
  bgFill,
}: HeroUISVGProps & { className?: string; style?: CSSProperties; bgFill: string }) {
  return (
    <svg
      style={style}
      className={className}
      fill={fill}
      height={size || height}
      width={size || width}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#cafd9b007d412ecf64352aefbeae0baf__a)">
        <path
          d="M19.72 5.806L19 5.059l-.72.747-7.769 8.057a11.658 11.658 0 0 0 .01 16.688c4.685 4.599 12.273 4.599 16.958 0a11.658 11.658 0 0 0 .01-16.688l-7.77-8.057z"
          stroke="#fff"
          strokeWidth="2"
        ></path>
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.222 29.837c4.296 4.217 11.26 4.217 15.556 0a10.659 10.659 0 0 0 0-15.27L19 6.5l-7.778 8.066a10.659 10.659 0 0 0 0 15.271z"
        fill={bgFill}
      ></path>
      <defs>
        <filter
          id="cafd9b007d412ecf64352aefbeae0baf__a"
          x="4"
          y="1.619"
          width="30"
          height="35.381"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_23120_22023"></feBlend>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_23120_22023" result="shape"></feBlend>
        </filter>
      </defs>
    </svg>
  )
}
