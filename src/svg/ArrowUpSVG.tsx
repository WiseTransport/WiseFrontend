export default function BusSVG({ classes }: { classes: string | undefined }) {
  return (
    <svg
      className={classes}
      fill="none"
      height="800px"
      viewBox="0 0 24 24"
      width="800px"
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
  );
}
