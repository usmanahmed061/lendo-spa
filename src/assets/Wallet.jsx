import * as React from "react"
const WalletIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={54}
    fill="none"
    {...props}
  >
    <rect
      width={38}
      height={28}
      x={9}
      y={14}
      stroke="#2D91FE"
      strokeWidth={2}
      rx={1}
    />
    <path
      stroke="#2D91FE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m32 14-7.671-6.819a2 2 0 0 0-2.658 0L14 14"
    />
    <path
      stroke="#2D91FE"
      strokeLinecap="round"
      strokeWidth={2}
      d="M42 24h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4"
    />
  </svg>
)
export default WalletIcon
