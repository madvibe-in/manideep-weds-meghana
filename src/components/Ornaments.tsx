type ClassNameProps = { className?: string };

// Hand-drawn gold flourish used as a section divider.
export function FloralDivider({ className = "" }: ClassNameProps) {
  return (
    <svg
      className={className}
      width="172"
      height="22"
      viewBox="0 0 172 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 11 C40 3, 60 3, 86 11 C112 19, 132 19, 162 11"
        stroke="rgba(201,151,87,0.62)"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M52 7 C48 3, 42 2, 39 6 C43 9, 49 10, 52 7Z M120 15 C124 19, 130 19, 133 14 C127 12, 123 12, 120 15Z M86 10 C83 6, 83 3, 88 2 C92 5, 92 8, 86 11Z"
        stroke="rgba(201,151,87,0.5)"
        strokeWidth="0.85"
        strokeLinejoin="round"
        fill="rgba(163,78,93,0.06)"
      />
      <circle cx="26" cy="9.5" r="1.5" fill="rgba(201,151,87,0.55)" />
      <circle cx="146" cy="12.5" r="1.5" fill="rgba(201,151,87,0.55)" />
    </svg>
  );
}

// Stylised Om mark crowning the formal invitation panel.
export function OmMark({ className = "" }: ClassNameProps) {
  return (
    <svg
      className={className}
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" stroke="rgba(201,151,87,0.4)" strokeWidth="1" />
      <path
        d="M20 38 C16 34, 17 26, 24 26 C29 26, 31 30, 28 34 C26 37, 22 36, 23 32"
        stroke="rgba(201,151,87,0.95)"
        strokeWidth="2.1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 35 C33 41, 42 41, 44 34 C45 30, 42 26, 38 28 C41 24, 47 25, 48 31"
        stroke="rgba(201,151,87,0.95)"
        strokeWidth="2.1"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M40 18 C44 16, 48 18, 48 22" stroke="rgba(201,151,87,0.9)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="44" cy="14" r="1.7" fill="rgba(201,151,87,0.95)" />
    </svg>
  );
}

// Filigree corner for the maroon invitation panel.
export function PanelCorner({ className = "" }: ClassNameProps) {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 60 C14 40, 26 22, 52 8" stroke="rgba(201,151,87,0.5)" strokeWidth="1" strokeLinecap="round" />
      <path
        d="M22 38 C14 34, 12 26, 18 20 C26 25, 28 32, 22 38Z"
        fill="rgba(201,151,87,0.1)"
        stroke="rgba(201,151,87,0.42)"
        strokeWidth="0.8"
      />
      <path
        d="M34 22 C27 15, 30 8, 38 5 C44 13, 42 20, 34 22Z"
        fill="rgba(163,78,93,0.12)"
        stroke="rgba(201,151,87,0.4)"
        strokeWidth="0.8"
      />
      <circle cx="10" cy="58" r="1.3" fill="rgba(201,151,87,0.5)" />
      <circle cx="54" cy="10" r="1.3" fill="rgba(201,151,87,0.5)" />
    </svg>
  );
}
