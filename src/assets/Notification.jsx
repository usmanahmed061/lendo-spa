import * as React from "react"
const Notification = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#A4A6BB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 19.905h18M5 19.857v-8.714a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v8.714M13 23h-2M12 4.143V1"
    />
  </svg>
)
export default Notification