import { SVGProps } from "react"
const SubtractIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={2}
    fill="none"
    {...props}
  >
    <path
      stroke="#141414"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1h14"
    />
  </svg>
)
export default SubtractIcon