export default function BusSVG({ classes }: { classes: string | undefined }) {
  return (
    <svg
      aria-hidden="true"
      className={classes}
      fill="none"
      focusable="false"
      height={18}
      role="presentation"
      viewBox="0 0 24 24"
      width={18}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="#EC442C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M22 22L20 20"
        stroke="#EC442C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
}
