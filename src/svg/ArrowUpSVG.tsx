export default function BusSVG({ classes }: { classes: string | undefined }) {
  return (
    <svg
      className={classes}
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 15L12 9L10.25 10.5M5 15L7.33333 13"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
