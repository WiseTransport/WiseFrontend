import { HeroUISVGProps } from "@/svg/shared.ts"

export default function ArrowUpSVG({
  fill = "none",
  size,
  height,
  width,
}: HeroUISVGProps) {
  return (
    <svg
      fill={fill}
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 15L12 9L10.25 10.5M5 15L7.33333 13"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}
