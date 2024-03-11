import * as React from "react"
const ProfileIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g opacity={0.15}>
      <rect width={40} height={40} fill="#0D0F52" rx={20} />
      <circle cx={20} cy={14} r={7} fill="#fff" />
      <path
        fill="#fff"
        d="M20 26c-4.871 0-9.003 2.023-10.45 5.724-.728 1.864.23 3.892 2.055 4.715C13.355 37.23 16.07 38 20 38c3.929 0 6.645-.772 8.395-1.56 1.825-.824 2.783-2.852 2.054-4.716C29.003 28.023 24.871 26 20 26Z"
      />
    </g>
  </svg>
)
export default ProfileIcon