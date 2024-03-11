import * as React from "react"
const InfoIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g opacity={0.2}>
      <path fill="#fff" d="M.5.5h19v19H.5z" />
      <path stroke="#000" d="M.5.5h19v19H.5z" />
      <circle cx={10} cy={10} r={9} stroke="#0D0F52" strokeWidth={2} />
      <rect width={2} height={8} x={9} y={4.001} fill="#0D0F52" rx={1} />
      <rect width={2} height={2} x={9} y={13.001} fill="#0D0F52" rx={1} />
    </g>
  </svg>
)
export default InfoIcon
